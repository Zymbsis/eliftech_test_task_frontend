import EventsList from '../components/EventsList/EventsList.jsx';
import Pagination from '../components/Pagination/Pagination.jsx';
import Loader from '../components/Loader/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage.jsx';
import { fetchAllEvents } from '../services/fetchFunction.js';
import { useFetch } from '../services/useFetch.js';
import { useState } from 'react';
import css from './EventPages.module.css';
import SortBar from '../components/SortBar/SortBar.jsx';

const EventsBoardPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    sortBy: 'event_date',
    sortOrder: 'desc',
  });

  const [{ data, ...rest }, isLoading, isError] = useFetch(
    fetchAllEvents,
    currentPage,
    filters.sortBy,
    filters.sortOrder,
  );

  const getNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const getPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  {
    if (isLoading) {
      return <Loader />;
    }
    if (isError) {
      return <ErrorMessage />;
    }
    if (data?.length) {
      return (
        <>
          <div className={css.wrapper}>
            <h2 className={css.title}>Events</h2>
            <SortBar
              setFilters={setFilters}
              setCurrentPage={setCurrentPage}
              filters={filters}
            />
          </div>
          <EventsList eventsList={data} />
          <Pagination
            paginationData={rest}
            setCurrentPage={setCurrentPage}
            getNextPage={getNextPage}
            getPrevPage={getPrevPage}
          />
        </>
      );
    }
  }
};

export default EventsBoardPage;

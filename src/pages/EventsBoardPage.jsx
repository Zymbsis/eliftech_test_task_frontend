import { useEffect, useState } from 'react';
import EventsList from '../components/EventsList/EventsList.jsx';
import Pagination from '../components/Pagination/Pagination.jsx';
import Loader from '../components/Loader/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage.jsx';

const EventsBoardPage = () => {
  const [eventsList, setEventsList] = useState([]);
  const [paginationData, setPaginationData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const getNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const getPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    (async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(
          `https://eliftechtesttaskbackend-production.up.railway.app/events?perPage=6&page=${currentPage}`,
        );
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        const { data } = await response.json();
        setEventsList(data.data);
        delete data.data;
        setPaginationData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      }
    })();
  }, [currentPage]);

  {
    if (isLoading) {
      return <Loader />;
    }
    if (isError) {
      return <ErrorMessage />;
    }
    if (eventsList.length) {
      return (
        <>
          <EventsList eventsList={eventsList} />
          <Pagination
            paginationData={paginationData}
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

import { fetchAllEvents } from '../helpers/fetchFunctions.js';
import { useFetch } from '../helpers/useFetch.js';
import { useEventContext } from '../helpers/useContext.js';
import Loader from '../components/Loader/Loader.jsx';
import SortBar from '../components/SortBar/SortBar.jsx';
import EventsList from '../components/EventsList/EventsList.jsx';
import Pagination from '../components/Pagination/Pagination.jsx';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage.jsx';
import { formatDate } from '../helpers/formatDate.js';

const EventsBoardPage = () => {
  const currentDate = formatDate(new Date(Date.now()));
  const {
    currentPage,
    sortParams: { sortBy, sortOrder },
  } = useEventContext();
  const [{ data, ...rest }, isLoading, isError] = useFetch(
    fetchAllEvents,
    currentPage,
    sortBy,
    sortOrder,
  );

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage />;
  if (data?.length)
    return (
      <>
        <SortBar />
        <EventsList
          eventsList={data}
          currentDate={currentDate}
        />
        <Pagination paginationData={rest} />
      </>
    );
};

export default EventsBoardPage;

import { useFetch, useEventContext, fetchAllEvents, formatDate } from 'helpers';
import {
  Loader,
  SortBar,
  EventsList,
  Pagination,
  ErrorMessage,
} from 'components';

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

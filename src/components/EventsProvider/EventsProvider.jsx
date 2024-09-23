import { useState } from 'react';
import { EventContext } from 'helpers';

const EventsProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortParams, setSortParams] = useState({
    sortBy: 'event_date',
    sortOrder: 'desc',
  });
  const getPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const getNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <EventContext.Provider
      value={{
        currentPage,
        sortParams,
        getPrevPage,
        getNextPage,
        setCurrentPage,
        setSortParams,
      }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventsProvider;

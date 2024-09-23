import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useFetch, fetchEventById } from 'helpers';
import { Loader, ParticipantsList, ErrorMessage, SearchBar } from 'components';
import NoParticipantsMessage from '../components/NoParticipantsMessage/NoParticipantsMessage.jsx';

const EventParticipantsPage = () => {
  const { id } = useParams();
  const [query, setQuery] = useState('');

  const [{ participants, title }, isLoading, isError] = useFetch(
    fetchEventById,
    id,
  );
  const participantsList = participants
    ? participants.filter(
        (item) =>
          item?.fullName?.toLowerCase().includes(query.toLowerCase()) ||
          item?.email?.toLowerCase().includes(query.toLowerCase()),
      )
    : [];

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage />;

  return participants?.length ? (
    <>
      <SearchBar
        title={title}
        query={query}
        setQuery={setQuery}
      />
      <ParticipantsList participantsList={participantsList} />
    </>
  ) : (
    <NoParticipantsMessage
      title={title}
      id={id}
    />
  );
};

export default EventParticipantsPage;

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useFetch } from '../helpers/useFetch.js';
import { fetchEventById } from '../helpers/fetchFunctions.js';
import Loader from '../components/Loader/Loader.jsx';
import ParticipantsList from '../components/ParticipantsList/ParticipantsList.jsx';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage.jsx';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import css from '../components/ParticipantsList/ParticipantsList.module.css';

const EventParticipantsPage = () => {
  const { id } = useParams();
  const [query, setQuery] = useState('');

  const [{ participants }, isLoading, isError] = useFetch(fetchEventById, id);
  const participantsList = participants
    ? participants.filter(
        (item) =>
          item.fullName.toLowerCase().includes(query.toLowerCase()) ||
          item.email.toLowerCase().includes(query.toLowerCase()),
      )
    : [];

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage />;

  return participants?.length ? (
    <>
      <SearchBar
        query={query}
        setQuery={setQuery}
      />
      <ParticipantsList participantsList={participantsList} />
    </>
  ) : (
    <p className={css.noParticipants}>
      No participants have registered for this event yet.
    </p>
  );
};

export default EventParticipantsPage;

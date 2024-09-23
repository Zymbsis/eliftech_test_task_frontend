import { useParams } from 'react-router-dom';
import { useFetch } from '../helpers/useFetch.js';
import { fetchEventById } from '../helpers/fetchFunctions.js';
import Loader from '../components/Loader/Loader.jsx';
import ParticipantsList from '../components/ParticipantsList/ParticipantsList.jsx';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage.jsx';

const EventParticipantsPage = () => {
  const { id } = useParams();
  const [{ participants }, isLoading, isError] = useFetch(fetchEventById, id);

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage />;
  if (participants) return <ParticipantsList participantsList={participants} />;
};

export default EventParticipantsPage;

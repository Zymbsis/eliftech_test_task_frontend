import { useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage.jsx';
import ParticipantsList from '../components/ParticipantsList/ParticipantsList.jsx';
import { fetchEventById } from '../services/fetchFunction.js';
import { useFetch } from '../services/useFetch.js';

const EventParticipantsPage = () => {
  const { id } = useParams();
  const [{ participants }, isLoading, isError] = useFetch(fetchEventById, id);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <ErrorMessage />;
  }
  if (participants) {
    return <ParticipantsList participantsList={participants} />;
  }
};

export default EventParticipantsPage;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage.jsx';
import ParticipantsList from '../components/ParticipantsList/ParticipantsList.jsx';

const EventParticipantsPage = () => {
  const { id } = useParams();
  const [participantsList, setParticipantsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(
          `https://eliftechtesttaskbackend-production.up.railway.app/events/${id}`,
        );
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        const { data } = await response.json();
        setParticipantsList(data.participants);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      }
    })();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <ErrorMessage />;
  }
  return <ParticipantsList participantsList={participantsList} />;
};

export default EventParticipantsPage;

import { useParams } from 'react-router-dom';
import { RegistrationForm } from 'components';

const EventRegistrationPage = () => {
  const { id } = useParams();

  return <RegistrationForm id={id} />;
};

export default EventRegistrationPage;

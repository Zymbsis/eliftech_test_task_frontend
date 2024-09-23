import { Link } from 'react-router-dom';
import css from './NoParticipantsMessage.module.css';

const NoParticipantsMessage = ({ title, id }) => {
  return (
    <>
      <p className={css.noParticipants}>
        No participants have registered for {<span>{title}</span>} event.
      </p>
      <Link
        className={css.callToAction}
        to={`/registrationPage/${id}`}>
        Be the first!
      </Link>
    </>
  );
};

export default NoParticipantsMessage;

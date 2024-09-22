import { Link } from 'react-router-dom';
import css from './EventCard.module.css';

const EventCard = ({ event }) => {
  const { title, description, event_date, organizer, _id } = event;
  return (
    <>
      <div className={css.contentWrapper}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Date: {event_date}</p>
        <p>Organizer: {organizer}</p>
      </div>
      <ul className={css.linkWrapper}>
        <li>
          <Link to={`/registrationPage/${_id}`}>Register</Link>
        </li>
        <li>
          <Link to={`/participantsPage/${_id}`}>View</Link>
        </li>
      </ul>
    </>
  );
};

export default EventCard;

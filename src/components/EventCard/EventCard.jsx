import { Link } from 'react-router-dom';
import css from './EventCard.module.css';

const EventCard = ({ event, currentDate }) => {
  const { title, description, event_date, organizer, _id } = event;
  const isEventUpcoming = event_date >= currentDate;

  return (
    <>
      <div className={css.contentWrapper}>
        <h3 className={css.title}>{title}</h3>
        <p className={css.organizer}>
          <span>Organizer:</span> {organizer}
        </p>
        <p className={css.description}>{description}</p>
        <span className={css.date}>{event_date}</span>
      </div>
      <ul className={css.linkWrapper}>
        <li>
          <Link
            to={isEventUpcoming ? `/registrationPage/${_id}` : null}
            className={`${css.link} ${
              !isEventUpcoming ? css.inactiveLink : ''
            }`}>
            Register
          </Link>
        </li>
        <li>
          <Link
            to={`/participantsPage/${_id}`}
            className={css.link}>
            View
          </Link>
        </li>
      </ul>
    </>
  );
};

export default EventCard;

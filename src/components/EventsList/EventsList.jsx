import EventCard from '../EventCard/EventCard.jsx';
import css from './EventsList.module.css';
import { formatDate } from './formatDate.js';

const EventsList = ({ eventsList }) => {
  const currentDate = formatDate(new Date(Date.now()));

  return (
    <ul className={css.eventsList}>
      {eventsList.map((event) => (
        <li key={event._id}>
          <EventCard event={event} currentDate={currentDate} />
        </li>
      ))}
    </ul>
  );
};

export default EventsList;

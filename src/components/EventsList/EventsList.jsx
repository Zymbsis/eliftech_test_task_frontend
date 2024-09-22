import EventCard from '../EventCard/EventCard.jsx';
import css from './EventsList.module.css';

const EventsList = ({ eventsList }) => {
  return (
    <>
      <ul className={css.eventsList}>
        {eventsList.map((event) => (
          <li key={event._id}>
            <EventCard event={event} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsList;

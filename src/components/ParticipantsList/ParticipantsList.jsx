import ParticipantCard from '../ParticipantCard/ParticipantCard.jsx';
import css from './ParticipantsList.module.css';

const ParticipantsList = ({ participantsList }) => {
  return participantsList.length ? (
    <>
      <h2 className={css.title}>&quot;Awesome Event&quot; participants</h2>
      <ul className={css.participantsList}>
        {participantsList.map((participant) => (
          <li key={participant._id}>
            <ParticipantCard participant={participant} />
          </li>
        ))}
      </ul>
    </>
  ) : (
    <p className={css.noParticipants}>
      No participants have registered for this event yet.
    </p>
  );
};

export default ParticipantsList;

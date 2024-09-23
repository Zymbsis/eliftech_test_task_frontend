import ParticipantCard from '../ParticipantCard/ParticipantCard.jsx';
import css from './ParticipantsList.module.css';

const ParticipantsList = ({ participantsList }) => {
  return participantsList.length ? (
    <ul className={css.participantsList}>
      {participantsList.map((participant) => (
        <li key={participant._id}>
          <ParticipantCard participant={participant} />
        </li>
      ))}
    </ul>
  ) : (
    <p className={css.noParticipants}>No participants found.</p>
  );
};

export default ParticipantsList;

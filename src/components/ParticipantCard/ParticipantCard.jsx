import css from './ParticipantCard.module.css';

const ParticipantCard = ({ participant }) => {
  return (
    <>
      <p className={css.name}>{participant.fullName}</p>
      <p className={css.email}>{participant.email}</p>
    </>
  );
};

export default ParticipantCard;

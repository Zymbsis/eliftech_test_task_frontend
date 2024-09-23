import css from './SelectInfoSource.module.css';

const SelectInfoSource = ({ register }) => {
  return (
    <fieldset className={css.fieldset}>
      <legend>Where did you hear about this event?</legend>
      <div className={css.inputWrapper}>
        <input
          id='socialMedia'
          type='radio'
          value='Social media'
          {...register('infoSource')}
        />
        <label htmlFor='socialMedia'>Social media</label>
        <input
          id='friends'
          type='radio'
          value='Friends'
          {...register('infoSource')}
        />
        <label htmlFor='friends'>Friends</label>
        <input
          id='foundMyself'
          type='radio'
          value='Found myself'
          {...register('infoSource')}
        />
        <label htmlFor='foundMyself'>Found myself</label>
      </div>
    </fieldset>
  );
};

export default SelectInfoSource;

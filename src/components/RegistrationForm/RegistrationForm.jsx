import { useForm } from 'react-hook-form';
import css from './RegistrationForm.module.css';
import { toast } from 'react-toastify';
import { addParticipant } from '../../services/fetchFunction.js';

const RegistrationForm = ({ id }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (formData) => {
    try {
      const data = await addParticipant(id, formData);
      console.log(data);
      toast.success('You have successfully registered for the event!');
      reset();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={css.registrationWrapper}>
      <h2>Event registration</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={css.form}>
        <label>
          Full name
          <input
            type='text'
            {...register('fullName')}
          />
        </label>
        <label>
          Email
          <input
            type='text'
            {...register('email')}
          />
        </label>
        <label>
          Date of birth
          <input
            type='text'
            {...register('dateOfBirth')}
          />
        </label>
        <fieldset>
          <legend>Where did you hear about this event?</legend>
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
        </fieldset>
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default RegistrationForm;

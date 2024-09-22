import { useForm } from 'react-hook-form';
import css from './RegistrationForm.module.css';
import { toast } from 'react-toastify';

const RegistrationForm = ({ id }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (formData) => {
    try {
      const response = await fetch(
        // `http://localhost:3000/events/${id}`,
        `https://eliftechtesttaskbackend-production.up.railway.app/events/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        },
      );
      if (!response.ok) {
        throw new Error(
          response.status === 409
            ? 'You are already registered for this event'
            : 'Something went wrong. Please try again',
        );
      }
      const data = await response.json();
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

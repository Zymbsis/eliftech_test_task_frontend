import { useForm } from 'react-hook-form';
import css from './RegistrationForm.module.css';
import { toast } from 'react-toastify';
import { addParticipant } from '../../services/fetchFunction.js';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationSchema } from './validationSchema.js';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';
import { useState } from 'react';

const RegistrationForm = ({ id }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });
  const [selectedDate, setSelectedDate] = useState(null);

  const onSubmit = async (formData) => {
    console.log(formData);

    try {
      await addParticipant(id, {
        ...formData,
        email: formData.email.toLowerCase(),
      });
      toast.success('You have successfully registered for the event!');
      reset();
      setSelectedDate(null);
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
          {errors.fullName && (
            <span className={css.errorMessage}>{errors.fullName.message}</span>
          )}
        </label>
        <label>
          Email
          <input
            type='text'
            {...register('email')}
          />
          {errors.email && (
            <span className={css.errorMessage}>{errors.email.message}</span>
          )}
        </label>
        <label>
          Date of birth
          <Flatpickr
            options={{ dateFormat: 'd-m-Y' }}
            value={selectedDate}
            onChange={(_, date) => {
              setValue('dateOfBirth', date);
              setSelectedDate(date);
            }}>
            <input
              type='text'
              value={selectedDate}
              {...register('dateOfBirth')}
            />
          </Flatpickr>
          {errors.dateOfBirth && (
            <span className={css.errorMessage}>
              {errors.dateOfBirth.message}
            </span>
          )}
        </label>
        <fieldset>
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
        <button
          type='submit'
          className={css.submitBtn}>
          Send
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;

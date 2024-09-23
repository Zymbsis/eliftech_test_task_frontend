import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { addParticipant, registrationSchema } from 'helpers';
import { yupResolver } from '@hookform/resolvers/yup';
import { SelectInfoSource, DataPicker } from 'components';
import css from './RegistrationForm.module.css';

const RegistrationForm = ({ id }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const onDateChange = (_, date) => {
    setValue('dateOfBirth', date);
    setSelectedDate(date);
  };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = async (formData) => {
    toast.dismiss();
    try {
      const promise = addParticipant(id, {
        ...formData,
        email: formData.email.toLowerCase(),
      });
      toast.promise(promise, {
        pending: 'Registration in progress, please wait...',
        success: 'You have successfully registered for the event!',
      });
      await promise;
      reset();
      setSelectedDate(null);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={css.formWrapper}>
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
        <DataPicker
          selectedDate={selectedDate}
          register={register}
          errors={errors}
          onDateChange={onDateChange}>
          {errors.dateOfBirth && (
            <span className={css.errorMessage}>
              {errors.dateOfBirth.message}
            </span>
          )}
        </DataPicker>
        <SelectInfoSource register={register} />
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

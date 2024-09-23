import Flatpickr from 'react-flatpickr';

const DataPicker = ({ onDateChange, selectedDate, register, children }) => {
  const currentDate = new Date();
  const maxDate = new Date(currentDate);
  maxDate.setFullYear(maxDate.getFullYear() - 16);
  const minDate = new Date(currentDate);
  minDate.setFullYear(minDate.getFullYear() - 90);

  return (
    <label>
      Date of birth
      <Flatpickr
        options={{
          dateFormat: 'd-m-Y',
          maxDate: maxDate,
          minDate: minDate,
        }}
        value={selectedDate}
        onChange={onDateChange}>
        <input
          type='text'
          {...register('dateOfBirth')}
        />
      </Flatpickr>
      {children}
    </label>
  );
};

export default DataPicker;

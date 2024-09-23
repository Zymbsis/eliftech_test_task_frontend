import { useEventContext, sortOptionsList } from 'helpers';
import css from './SortBar.module.css';

const SortBar = () => {
  const { setSortParams, setCurrentPage, sortParams } = useEventContext();
  const onChange = ({ target: { value } }) => {
    setSortParams(JSON.parse(value));
    setCurrentPage(1);
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Events</h2>
      <select
        onChange={onChange}
        value={JSON.stringify(sortParams)}
        className={css.select}>
        {sortOptionsList.map((option, index) => (
          <option
            key={index}
            value={JSON.stringify(option.value)}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortBar;

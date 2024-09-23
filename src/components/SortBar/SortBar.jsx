import { optionList } from './optionsList.js';
import css from './SortBar.module.css';

const SortBar = ({ setFilters, setCurrentPage, filters }) => {
  const onChange = ({ target: { value } }) => {
    setFilters(JSON.parse(value));
    setCurrentPage(1);
  };

  return (
    <div>
      <select
        onChange={onChange}
        value={JSON.stringify(filters)}
        className={css.select}>
        {optionList.map((option, index) => (
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

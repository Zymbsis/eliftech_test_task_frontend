import css from './SearchBar.module.css';

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>&quot;Awesome Event&quot; participants</h2>
      <input
        className={css.searchField}
        value={query}
        placeholder=' Find participants by name or email'
        onChange={({ target: { value } }) => {
          setQuery(value);
        }}
      />
    </div>
  );
};

export default SearchBar;

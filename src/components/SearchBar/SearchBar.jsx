import css from './SearchBar.module.css';

const SearchBar = ({ title, query, setQuery }) => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>
        <span>&quot;{title}&quot;</span> participants
      </h2>
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

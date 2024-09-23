import { useEventContext, createPagination } from 'helpers';
import css from './Pagination.module.css';

const Pagination = ({ paginationData }) => {
  const { totalPages, page, hasNextPage, hasPrevPage } = paginationData;
  const paginationNav = createPagination(totalPages, page, 6);
  const { getNextPage, getPrevPage, setCurrentPage } = useEventContext();

  return (
    <div className={css.paginationWrapper}>
      <button
        className={css.arrowLeft}
        type='button'
        disabled={!hasPrevPage}
        onClick={getPrevPage}>
        <svg
          viewBox='0 0 64 32'
          xmlns='http://www.w3.org/2000/svg'
          style={{ transform: 'rotate(180deg)' }}>
          <path d='M42.95 6.925c0 0.015 0.035 0.095 0.075 0.18 0.17 0.325 0.925 2.21 1.14 2.845 0.46 1.365 0.86 3.195 0.895 4.135l0.015 0.315h-45.075v3.15h45.11l-0.030 0.335c-0.050 0.495-0.265 1.76-0.405 2.365-0.245 1.095-0.64 2.235-1.34 3.9-0.205 0.48-0.365 0.88-0.36 0.885 0.020 0.030 1.74-0.7 9.575-4.075 3.92-1.69 10.51-4.555 11.115-4.835 0.16-0.075 0.275-0.155 0.25-0.175-0.020-0.020-0.275-0.14-0.565-0.265s-0.995-0.43-1.575-0.685c-1.22-0.535-2.425-1.060-7.86-3.405-3.46-1.495-8.955-3.845-10.8-4.63-0.090-0.035-0.165-0.055-0.165-0.040z'></path>
        </svg>
      </button>
      <ul className={css.paginationList}>
        {paginationNav.map((item, index) => (
          <li
            key={index}
            className={page === item ? css.activePage : ''}>
            <button
              type='button'
              onClick={() => {
                setCurrentPage(item);
              }}>
              {item}
            </button>
          </li>
        ))}
      </ul>
      <button
        className={css.arrowRight}
        type='button'
        disabled={!hasNextPage}
        onClick={getNextPage}>
        <svg
          viewBox='0 0 64 32'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M42.95 6.925c0 0.015 0.035 0.095 0.075 0.18 0.17 0.325 0.925 2.21 1.14 2.845 0.46 1.365 0.86 3.195 0.895 4.135l0.015 0.315h-45.075v3.15h45.11l-0.030 0.335c-0.050 0.495-0.265 1.76-0.405 2.365-0.245 1.095-0.64 2.235-1.34 3.9-0.205 0.48-0.365 0.88-0.36 0.885 0.020 0.030 1.74-0.7 9.575-4.075 3.92-1.69 10.51-4.555 11.115-4.835 0.16-0.075 0.275-0.155 0.25-0.175-0.020-0.020-0.275-0.14-0.565-0.265s-0.995-0.43-1.575-0.685c-1.22-0.535-2.425-1.060-7.86-3.405-3.46-1.495-8.955-3.845-10.8-4.63-0.090-0.035-0.165-0.055-0.165-0.040z'></path>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;

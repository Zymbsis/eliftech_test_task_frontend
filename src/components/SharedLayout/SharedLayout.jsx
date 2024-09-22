import { Suspense } from 'react';
import Header from '../Header/Header.jsx';
import css from './SharedLayout.module.css';

const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <section className={css.section}>
          <div className={css.container}>
            <Suspense fallback='Loading...'>{children}</Suspense>
          </div>
        </section>
      </main>
    </>
  );
};

export default SharedLayout;

import { Suspense } from 'react';
import Header from '../Header/Header.jsx';
import Loader from '../Loader/Loader.jsx';
import { Flip, ToastContainer } from 'react-toastify';

import css from './SharedLayout.module.css';

const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <section className={css.section}>
          <div className={css.container}>
            <Suspense fallback={<Loader />}>{children}</Suspense>
          </div>
        </section>
      </main>
      <ToastContainer
        position='top-center'
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Flip}
      />
    </>
  );
};

export default SharedLayout;

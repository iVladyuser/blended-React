import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './Layout.module.css';
import { Suspense } from 'react';
import { Loader } from '../../components/Loader.jsx';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Suspense fallback={<Loader />}>
        <main className={styles.main}>{<Outlet />}</main>
      </Suspense>
      <Footer />
    </div>
  );
};

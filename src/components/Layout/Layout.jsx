import { Link, Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Aside } from './Aside/Aside';

export const Layout = ({ setIsAuth }) => {
  return (
    <>
      <Header />

      <div style={{ display: 'flex' }}>
        <Aside setIsAuth={setIsAuth} />
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

<Link />;

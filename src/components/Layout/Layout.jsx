import { Link, Outlet } from 'react-router-dom';
import { Header, Footer, Aside } from '../index';

export const Layout = () => {
  return (
    <>
      <Header />

      <div style={{ display: 'flex' }}>
        <Aside />
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

<Link />;

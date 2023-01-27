import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';

import './Layout.scss';

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout__header">
        <Header />
      </div>
      <div className="layout__main">
        <Outlet />
      </div>
      <div className="layout__footer">footer</div>
    </div>
  );
};

export { Layout };

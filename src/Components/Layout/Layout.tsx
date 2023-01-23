import { Outlet } from 'react-router-dom';

import './Layout.scss';

const Layout = function Layout() {
  return (
    <div className="layout">
      <div className="layout__header">header</div>
      <div className="layout__main">
        <Outlet />
      </div>
      <div className="layout__footer">footer</div>
    </div>
  );
};

export default Layout;

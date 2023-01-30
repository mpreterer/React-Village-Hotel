import { Outlet } from 'react-router-dom';

import { Footer } from '../Footer/Footer';
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
      <div className="layout__footer">
        <Footer
          desc="Бронирование номеров в лучшем отеле 2019 года 
          по версии ассоциации «Отельные взгляды»"
          specialTitle="Получайте специальные предложения и новости сервиса"
          copyright="Copyright © 2018 Toxin отель. Все права защищены."
        />
      </div>
    </div>
  );
};

export { Layout };

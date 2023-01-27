import { FC } from 'react';

import './Main.scss';

const Main: FC = () => {
  return (
    <main className="landing-page">
      <div className="landing-page__wrapper">
        <section className="landing-page__search-room-wrapper" />
        <span className="landing-page__text">
          Лучшие номера для вашей работы, отдыха и просто вдохновения
        </span>
      </div>
    </main>
  );
};

export { Main };

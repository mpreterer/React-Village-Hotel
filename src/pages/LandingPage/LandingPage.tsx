import { FC } from 'react';

import { SearchRoomForm } from '../../components/SearchRoomForm/SearchRoomForm';

import './LandingPage.scss';

const LandingPage: FC = () => {
  return (
    <main className="landing-page">
      <div className="landing-page__wrapper">
        <section className="landing-page__search-room-wrapper">
          <SearchRoomForm />
        </section>
        <span className="landing-page__text">
          Лучшие номера для вашей работы, отдыха и просто вдохновения
        </span>
      </div>
    </main>
  );
};

export { LandingPage };

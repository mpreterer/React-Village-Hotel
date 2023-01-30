import { FC } from 'react';

const Filters: FC = () => {
  return (
    <aside className="filters">
      <div className="filters__arrival-in-hotel" />
      <div className="filters__guests-container" />
      <div className="filters__price-hotel" />
      <div className="filters__order-in-room" />
      <div className="filters__availability" />
      <div className="filters__furniture" />
      <div className="filters__convenience" />
    </aside>
  );
};

export { Filters };

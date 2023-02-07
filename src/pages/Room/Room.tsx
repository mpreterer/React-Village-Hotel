import classNames from 'classnames';

import room1 from '../../assets/img/room-details/room-details-1.jpg';
import room2 from '../../assets/img/room-details/room-details-2.jpg';
import room3 from '../../assets/img/room-details/room-details-3.jpg';

import './Room.scss';

const ROOM_IMAGES_PATHS = [room1, room2, room3];

const Room = () => {
  return (
    <main className="room">
      <div className="room__preview">
        {ROOM_IMAGES_PATHS.map((path, index) => (
          <img
            key={path}
            src={path}
            className={classNames('room__preview-img', {
              'room__preview-img_grid-area_first': index === 0,
              'room__preview-img_grid-area_second': index === 1,
              'room__preview-img_grid-area_third': index === 2,
            })}
            alt="комната отеля"
          />
        ))}
      </div>
    </main>
  );
};

export { Room };

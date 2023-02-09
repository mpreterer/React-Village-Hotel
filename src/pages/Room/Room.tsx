import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import room1 from '../../assets/img/room-details/room-details-1.jpg';
import room2 from '../../assets/img/room-details/room-details-2.jpg';
import room3 from '../../assets/img/room-details/room-details-3.jpg';
import { BulletList } from '../../components/BulletList/BulletList';
import { useAppDispatch } from '../../hooks/redux';
import { roomInfo } from '../../store/slices/room/selectors';
import { fetchRoomInfoById } from '../../store/slices/room/slice';

import './Room.scss';

const ROOM_IMAGES_PATHS = [room1, room2, room3];

const Room = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (typeof id === 'string') {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(fetchRoomInfoById(Number(id.substring(1))));
    }
  }, []);

  const room = useSelector(roomInfo);
  const { votes, reviewsCount, rating, images } = room;

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
      <BulletList
        labelName="Правила"
        listItems={[
          { text: 'Нельзя с питомцами', id: 1 },
          { text: 'Без вечеринок и мероприятий', id: 2 },
        ]}
      />
    </main>
  );
};

export { Room };

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import room1 from '../../assets/img/room-details/room-details-1.jpg';
import room2 from '../../assets/img/room-details/room-details-2.jpg';
import room3 from '../../assets/img/room-details/room-details-3.jpg';
import { BookingForm } from '../../components/BookingForm/BookingForm';
import { BulletList } from '../../components/BulletList/BulletList';
import { FeatureList } from '../../components/FeatureList/FeatureList';
import { Loader } from '../../components/Loader/Loader';
import { useAppDispatch } from '../../hooks/redux';
import { room, statusRequest } from '../../store/slices/room/selectors';
import { fetchRoomById } from '../../store/slices/room/slice';

import { convertInformation, convertRules } from './helpers';
import './Room.scss';

const ROOM_IMAGES_PATHS = [room1, room2, room3];

const Room = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof id === 'string') {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(fetchRoomById(Number(id)));
    }
  }, [dispatch, id]);

  const aboutRoom = useSelector(room);
  const status = useSelector(statusRequest);
  const { details, information } = aboutRoom;

  return (
    <main className="room">
      {status === 'loading' && <Loader />}
      {status === 'rejected' && (
        <div className="room__error-message">
          произошла ошибка, повторите попытку позже
        </div>
      )}
      {status === 'resolved' && Object.keys(aboutRoom).length === 0 && (
        <div className="room__error-message">данные о комнате не найдены</div>
      )}
      {status === 'resolved' && Object.keys(aboutRoom).length !== 0 && (
        <>
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
          <div className="room__information">
            <h2 className="room__information-title">Сведения о номере</h2>
            <FeatureList featureItems={convertInformation(information)} />
          </div>
          <div className="room__rules">
            <h2 className="room__rules-title">Правила</h2>
            <BulletList labelName="" listItems={convertRules(details)} />
          </div>
          <BookingForm />
          <div className="room__cancel">
            <h2 className="room__cancel-title">Отмена</h2>
            <p className="room__cancel-text">
              Бесплатная отмена в течение 48 ч. После этого при отмене не
              позднее чем за 5 дн. до прибытия вы получите полный возврат за
              вычетом сбора за услуги.
            </p>
          </div>
        </>
      )}
    </main>
  );
};

export { Room };

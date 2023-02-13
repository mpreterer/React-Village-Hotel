/* eslint-disable @typescript-eslint/no-floating-promises */
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
import { FeedbackList } from '../../components/FeedbackList/FeedbackList';
import { PieChart } from '../../components/PieChart/PieChart';
import { useAppDispatch } from '../../hooks/redux';
import { REVIEW_DECLENSIONS } from '../../shared/constants/reviewDeclensions';
import { getWordDeclension } from '../../shared/helpers/getWordDeclension/getWordDeclension';
import { roomInfo } from '../../store/slices/room/selectors';
import { fetchRoomInfoById } from '../../store/slices/room/slice';

import { convertRules } from './helpers';
import './Room.scss';

const ROOM_IMAGES_PATHS = [room1, room2, room3];

const Room = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof id === 'string') {
      dispatch(fetchRoomInfoById(Number(id.substring(1))));
    }
  }, [dispatch, id]);

  const room = useSelector(roomInfo);
  const { details, votes, comments } = room;
  const reviewCount = comments?.length;
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
      <section className="room__container">
        <div className="room__information">
          <h2 className="room__information-title">Сведения о номере</h2>
          <FeatureList
            featureItems={[
              {
                label: 'Комфорт',
                description: 'Шумопоглощающие стены',
                imageName: 'mood',
                id: 0,
              },
              {
                label: 'Удобство',
                description: 'Окно в каждой из спален',
                imageName: 'location_city',
                id: 1,
              },
              {
                label: 'Уют',
                description: 'Номер оснащен камином',
                imageName: 'local_fire_department',
                id: 2,
              },
            ]}
          />
        </div>
        <div className="room__votes">
          <h2 className="room__votes-title">Впечатления от номера</h2>
          {votes && <PieChart items={votes} />}
        </div>
        <div className="room__booking-form">
          <BookingForm />
        </div>
        <div className="room__feedback">
          <h2 className="room__feedback-title">Отзывы посетителей номера</h2>
          {reviewCount && (
            <span className="room__feedback-count">
              {`${reviewCount} ${getWordDeclension(
                reviewCount,
                REVIEW_DECLENSIONS
              )}`}
            </span>
          )}
          <div className="room__feedback-list">
            {reviewCount && <FeedbackList feedbackItems={comments} />}
          </div>
        </div>
        <div className="room__rules">
          <h2 className="room__rules-title">Правила</h2>
          <BulletList labelName="" listItems={convertRules(details)} />
        </div>
        <div className="room__cancel">
          <h2 className="room__cancel-title">Отмена</h2>
          <p className="room__cancel-text">
            Бесплатная отмена в течение 48 ч. После этого при отмене не позднее
            чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора
            за услуги.
          </p>
        </div>{' '}
      </section>
    </main>
  );
};

export { Room };

import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import { BookingForm } from '../../components/BookingForm/BookingForm';
import { BulletList } from '../../components/BulletList/BulletList';
import { FeatureList } from '../../components/FeatureList/FeatureList';
import { FeedbackForm } from '../../components/FeedbackForm/FeedbackForm';
import { FeedbackList } from '../../components/FeedbackList/FeedbackList';
import { Loader } from '../../components/Loader/Loader';
import { PieChart } from '../../components/PieChart/PieChart';
import { useAppDispatch } from '../../hooks/redux';
import { REVIEW_DECLENSIONS } from '../../shared/constants/reviewDeclensions';
import { getDateFromString } from '../../shared/helpers/getDateFromString/getDateFromString';
import { getWordDeclension } from '../../shared/helpers/getWordDeclension/getWordDeclension';
import {
  userIdSelect,
  userNameSelect,
  userSurnameSelect,
} from '../../store/slices/auth/selectors';
import { filterSelect } from '../../store/slices/filters/selectors';
import {
  review,
  roomSelect,
  statusSelect,
} from '../../store/slices/room/selectors';
import { addFeedback, fetchRoomById } from '../../store/slices/room/slice';
import { roomsSelect } from '../../store/slices/rooms/selectors';
import { fetchRooms } from '../../store/slices/rooms/slice';

import { convertInformation, convertRules } from './helpers';
import './Room.scss';

const Room = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const aboutRoom = useSelector(roomSelect);
  const bookedDates = aboutRoom?.bookedDates;
  const status = useSelector(statusSelect);
  const filters = useSelector(filterSelect);

  const userId = useSelector(userIdSelect);
  const name = useSelector(userNameSelect);
  const surname = useSelector(userSurnameSelect);

  const rooms = useSelector(roomsSelect);
  const sequenceNumber = rooms.findIndex(
    (item) => item.roomNumber === Number(id)
  );

  const reviews = Object.entries(useSelector(review) ?? {});
  const reviewCount = reviews.length;

  const isReviewAllowed = bookedDates
    ? Object.entries(bookedDates).find(
        ([, { dates }]) => getDateFromString(dates.to) <= new Date()
      )
    : false;

  useEffect(() => {
    dispatch(fetchRoomById(Number(id)));
  }, [dispatch, id]);

  useEffect(() => {
    if (rooms.length === 0) {
      dispatch(fetchRooms());
    }
  }, [rooms, dispatch]);

  const handleFeedbackSubmit = useCallback(
    (text: string, path = '') => {
      const url = path
        ? `reviews${path
            .split('/')
            .reduce(
              (accumulator, element) =>
                element ? `${accumulator}/${element}/reviews` : '',
              ''
            )}`
        : 'reviews';

      if (userId && name && surname && id)
        dispatch(
          addFeedback({
            roomNumber: id,
            text,
            sequenceNumber,
            path: url,
            userId,
            date: new Date(),
            userName: `${name} ${surname}`,
          })
        );
    },
    [dispatch, id, name, sequenceNumber, surname, userId]
  );

  return (
    <main className="room">
      {status === 'loading' && (
        <div className="room__loader">
          <Loader />
        </div>
      )}
      {status === 'rejected' && (
        <div className="room__error-message">
          произошла ошибка, повторите попытку позже
        </div>
      )}
      {status === 'resolved' && !aboutRoom && (
        <div className="room__error-message">данные о комнате не найдены</div>
      )}
      {status === 'resolved' && aboutRoom && (
        <>
          <div className="room__preview">
            {aboutRoom.imagesDetailed.map((path, index) => (
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
          <section
            className={classNames('room__container', {
              'room__container_no-votes': !aboutRoom.votes,
            })}
          >
            <div className="room__information">
              <h2 className="room__information-title">Сведения о номере</h2>
              <FeatureList
                featureItems={convertInformation(aboutRoom.information)}
              />
            </div>

            {aboutRoom.votes && (
              <div className="room__votes">
                <h2 className="room__votes-title">Впечатления от номера</h2>
                <PieChart items={aboutRoom.votes} />
              </div>
            )}
            <div className="room__booking-form">
              <BookingForm
                price={aboutRoom.price}
                roomNumber={aboutRoom.roomNumber}
                isLux={aboutRoom.isLux}
                selectedDate={filters.selectedDates}
                guestItems={filters.capacity.items}
                userId={userId}
                sequenceNumber={sequenceNumber}
              />
            </div>
            <div className="room__feedback">
              <h2 className="room__feedback-title">
                Отзывы посетителей номера
              </h2>
              {!!reviewCount && (
                <span className="room__feedback-count">
                  {`${reviewCount} ${getWordDeclension(
                    reviewCount,
                    REVIEW_DECLENSIONS
                  )}`}
                </span>
              )}
              <div className="room__feedback-list">
                {review.length ? (
                  <FeedbackList
                    feedbackItems={reviews}
                    path="/"
                    isReplyAllowed={userId !== null}
                    onSubmit={handleFeedbackSubmit}
                  />
                ) : (
                  <span>
                    Еще никто не оставил отзыв
                    {isReviewAllowed && <span>, станьте первым</span>}
                  </span>
                )}
                {userId && isReviewAllowed && (
                  <div className="room__feedback-form">
                    <FeedbackForm
                      onSubmit={handleFeedbackSubmit}
                      title="Отправить отзыв"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="room__rules">
              <h2 className="room__rules-title">Правила</h2>
              <BulletList listItems={convertRules(aboutRoom.details)} />
            </div>
            <div className="room__cancel">
              <h2 className="room__cancel-title">Отмена</h2>
              <p className="room__cancel-text">
                Бесплатная отмена в течение 48 ч. После этого при отмене не
                позднее чем за 5 дн. до прибытия вы получите полный возврат за
                вычетом сбора за услуги.
              </p>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export { Room };

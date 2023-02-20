import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import { BookingForm } from '../../components/BookingForm/BookingForm';
import { BulletList } from '../../components/BulletList/BulletList';
import { FeatureList } from '../../components/FeatureList/FeatureList';
import { FeedbackList } from '../../components/FeedbackList/FeedbackList';
import { Loader } from '../../components/Loader/Loader';
import { PieChart } from '../../components/PieChart/PieChart';
import { useAppDispatch } from '../../hooks/redux';
import { REVIEW_DECLENSIONS } from '../../shared/constants/reviewDeclensions';
import { getWordDeclension } from '../../shared/helpers/getWordDeclension/getWordDeclension';
import { filterSelect } from '../../store/slices/filters/selectors';
import { roomSelect, statusSelect } from '../../store/slices/room/selectors';
import { fetchRoomById } from '../../store/slices/room/slice';

import { convertInformation, convertRules } from './helpers';
import './Room.scss';

const Room = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const aboutRoom = useSelector(roomSelect);
  const status = useSelector(statusSelect);
  const filters = useSelector(filterSelect);
  const reviewCount = aboutRoom?.comments?.length;

  useEffect(() => {
    dispatch(fetchRoomById(Number(id)));
  }, [dispatch, id]);

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
                {aboutRoom.comments?.length ? (
                  <FeedbackList feedbackItems={aboutRoom.comments} />
                ) : (
                  <span>Отзывов нет</span>
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

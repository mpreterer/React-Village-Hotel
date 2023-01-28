import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SCREENS } from '../../routes/endpoints';
import { CardHeaderInfo } from '../CardHeaderInfo/CardHeaderInfo';
import { Rate } from '../Rate/Rate';

import './RoomCard.scss';
import 'swiper/swiper.min.css';

type Props = {
  id: string;
  roomNumber: number;
  price: number;
  reviewsCount: number;
  rateNumber: number;
  imgsSrc: string[];
  isLux?: boolean;
  onClickRate?: (id: string, value: number) => void;
};

const RoomCard = ({
  id,
  roomNumber,
  price,
  reviewsCount,
  imgsSrc,
  rateNumber,
  isLux = false,
  onClickRate,
}: Props) => {
  const handleRateWrapperClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleRateClick = (value: number) => {
    onClickRate?.(id, value);
  };

  return (
    <div className="room-card">
      <div className="room-card__slider">
        <Swiper
          slidesPerView="auto"
          modules={[Navigation, Pagination]}
          pagination={{
            el: '.js-room-card__pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'room-card__pagination-bullet',
            bulletActiveClass: 'room-card__pagination-bullet_active',
          }}
          navigation={{
            nextEl: '.js-room-card__button-next',
            prevEl: '.js-room-card__button-prev',
          }}
        >
          {imgsSrc.map((src, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={index}>
              <img src={src} alt="комната отеля" className="room-card__img" />
            </SwiperSlide>
          ))}
          <div className="room-card__pagination js-room-card__pagination" />
          <button
            type="button"
            // eslint-disable-next-line max-len
            className="room-card__button js-room-card__button-prev room-card__button"
          >
            <span className="room-card__button-icon">expand_more</span>
          </button>
          <button
            type="button"
            // eslint-disable-next-line max-len
            className="room-card__button js-room-card__button-next room-card__button_rotated"
          >
            <span className="room-card__button-icon">expand_more</span>
          </button>
        </Swiper>
      </div>
      <div className="room-card__description">
        <Link
          to={`${SCREENS.ROOM}:${id}`}
          className="room-card__description-link"
        >
          <div className="room-card__description-header">
            <CardHeaderInfo
              isLux={isLux}
              price={price}
              roomNumber={roomNumber}
            />
          </div>
          <div className="room-card__description-footer">
            <div
              role="none"
              className="room-card__rate"
              onClick={handleRateWrapperClick}
            >
              <Rate rateNumber={rateNumber} onClick={handleRateClick} />
            </div>
            <p className="room-card__description-footer-reviews-text">
              <span className="room-card__description-footer-reviews-count">
                {reviewsCount}
              </span>{' '}
              Отзывов
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export { RoomCard };

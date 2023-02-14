import { FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SCREENS } from '../../routes/endpoints';
import { getWordDeclension } from '../../shared/helpers/getWordDeclension/getWordDeclension';
import { CardHeaderInfo } from '../CardHeaderInfo/CardHeaderInfo';
import { Rate } from '../Rate/Rate';

import { REVIEW_DECLINATIONS } from './constants';
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

const RoomCard: FC<Props> = ({
  id,
  roomNumber,
  price,
  reviewsCount,
  imgsSrc,
  rateNumber,
  isLux = false,
  onClickRate,
}) => {
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
          {imgsSrc.map((src) => (
            <SwiperSlide key={src}>
              <img src={src} alt="комната отеля" className="room-card__img" />
            </SwiperSlide>
          ))}
          <div className="room-card__pagination js-room-card__pagination" />
          <button
            type="button"
            className="room-card__button js-room-card__button-prev"
          >
            <span className="room-card__button-icon">expand_more</span>
          </button>
          <button
            type="button"
            className="room-card__button
            js-room-card__button-next
            room-card__button_rotated"
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
              {getWordDeclension(reviewsCount, REVIEW_DECLINATIONS)}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export { RoomCard };

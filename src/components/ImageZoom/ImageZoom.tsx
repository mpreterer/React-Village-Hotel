import { FC } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './ImageZoom.scss';
import 'swiper/swiper.min.css';

export type Props = {
  imgsSrc: string[];
};

const ImageZoom: FC<Props> = ({ imgsSrc }) => {
  return (
    <div className="image-zoom">
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
    </div>
  );
};

export { ImageZoom };

import { FC } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './ImageSlider.scss';
import 'swiper/swiper.min.css';

export type Props = {
  imgsSrc: string[];
};

const ImageSlider: FC<Props> = ({ imgsSrc }) => {
  return (
    <div className="image-slider">
      <Swiper
        slidesPerView="auto"
        modules={[Navigation, Pagination]}
        pagination={{
          el: '.js-image-slider__pagination',
          type: 'bullets',
          clickable: true,
          bulletClass: 'image-slider__pagination-bullet',
          bulletActiveClass: 'image-slider__pagination-bullet_active',
        }}
        navigation={{
          nextEl: '.js-image-slider__button-next',
          prevEl: '.js-image-slider__button-prev',
        }}
      >
        {imgsSrc.map((src) => (
          <SwiperSlide key={src}>
            <img src={src} alt="комната отеля" className="image-slider__img" />
          </SwiperSlide>
        ))}
        <div className="image-slider__pagination js-image-slider__pagination" />
        <button
          type="button"
          className="image-slider__button js-image-slider__button-prev"
        >
          <span className="image-slider__button-icon">expand_more</span>
        </button>
        <button
          type="button"
          className="image-slider__button
      js-image-slider__button-next
      image-slider__button_rotated"
        >
          <span className="image-slider__button-icon">expand_more</span>
        </button>
      </Swiper>
    </div>
  );
};

export { ImageSlider };

import { FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { SCREENS } from '../../routes/endpoints';
import { REVIEW_DECLENSIONS } from '../../shared/constants/reviewDeclensions';
import { getWordDeclension } from '../../shared/helpers/getWordDeclension/getWordDeclension';
import { CardHeaderInfo } from '../CardHeaderInfo/CardHeaderInfo';
import { ImageSlider } from '../ImageSlider/ImageSlider';
import { Rate } from '../Rate/Rate';

import './RoomCard.scss';
import 'swiper/swiper.min.css';

export type Props = {
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
      <ImageSlider imgsSrc={imgsSrc} />
      <div className="room-card__description">
        <Link
          to={`${SCREENS.ROOM}${id}`}
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
              {getWordDeclension(reviewsCount, REVIEW_DECLENSIONS)}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export { RoomCard };

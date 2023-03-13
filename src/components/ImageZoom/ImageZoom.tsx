import { FC } from 'react';

import { ImageSlider } from '../ImageSlider/ImageSlider';

import './ImageZoom.scss';
import 'swiper/swiper.min.css';

export type Props = {
  imgsSrc: string[];
};

const ImageZoom: FC<Props> = ({ imgsSrc }) => {
  return (
    <div className="image-zoom">
      <ImageSlider imgsSrc={imgsSrc} />
    </div>
  );
};

export { ImageZoom };

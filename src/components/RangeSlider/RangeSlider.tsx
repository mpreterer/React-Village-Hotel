import { FC, useCallback, useEffect, useRef, useState } from 'react';
import noUiSlider, { API } from 'nouislider';
import wNumb from 'wnumb';

import './RangeSlider.scss';

type Props = {
  title: string;
  start: number[];
  step: number;
  range: { min: number; max: number };
  text?: string;
  onChange?: (values: (string | number)[]) => void;
};

interface SliderRef extends HTMLDivElement {
  noUiSlider?: API;
}

const RangeSlider: FC<Props> = ({
  title,
  start,
  step,
  range,
  text = '',
  onChange,
}) => {
  const sliderElementRef = useRef<SliderRef>(null);
  const [priceText, setPriceText] = useState(`${range.min} - ${range.max}`);

  const handleSliderUpdate = useCallback(
    (values: (string | number)[]) => {
      const valuesString = values.join(' - ');
      setPriceText(valuesString);
      onChange?.(values);
    },
    [onChange]
  );

  useEffect(() => {
    const sliderCurrent = sliderElementRef.current;
    if (sliderCurrent !== null) {
      noUiSlider.create(sliderCurrent, {
        start,
        step,
        range,
        connect: true,
        format: wNumb({
          decimals: 0,
          thousand: ' ',
          suffix: '₽',
        }),
      });
      sliderCurrent.noUiSlider?.on('update', handleSliderUpdate);
    }
    return () => {
      if (sliderCurrent !== null) {
        sliderCurrent.noUiSlider?.off('update');
        sliderCurrent.noUiSlider?.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (sliderElementRef.current !== null) {
      sliderElementRef.current.noUiSlider?.off('update');
      sliderElementRef.current.noUiSlider?.on('update', handleSliderUpdate);
    }
  }, [handleSliderUpdate]);

  useEffect(() => {
    if (sliderElementRef.current !== null) {
      sliderElementRef.current.noUiSlider?.updateOptions(
        { range, step, start },
        false
      );
    }
  }, [range, step, start]);

  return (
    <div className="range-slider">
      <div className="range-slider__info">
        <h3 className="range-slider__title">{title}</h3>
        <div className="range-slider__price">{priceText}</div>
      </div>
      <div ref={sliderElementRef} className="range-slider__slider" />
      {text && <p className="range-slider__note-text">{text}</p>}
    </div>
  );
};

export { RangeSlider };

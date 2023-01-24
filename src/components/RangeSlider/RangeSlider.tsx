import { useCallback, useEffect, useRef, useState } from 'react';
import noUiSlider, { API } from 'nouislider';
import wNumb from 'wnumb';

import './RangeSlider.scss';

interface IRangeSlider {
  title?: string;
  text?: string;
  start?: number[];
  step?: number;
  range?: { min: number; max: number };
  onChange?: (values: (string | number)[]) => void;
}

interface SliderRef extends HTMLDivElement {
  noUiSlider?: API;
}

const defaultProps = {
  title: 'Range Slider',
  text: '',
  start: [5000, 10000],
  step: 100,
  range: { min: 1000, max: 15500 },
  onChange: () => {},
};

const RangeSlider = ({
  title = defaultProps.title,
  text = defaultProps.text,
  start = defaultProps.start,
  step = defaultProps.step,
  range = defaultProps.range,
  onChange = defaultProps.onChange,
}: IRangeSlider) => {
  const sliderElementRef = useRef<SliderRef>(null);
  const [priceText, setPriceText] = useState(`${range.min} - ${range.max}`);

  const handleSliderUpdate = useCallback(
    (values: (string | number)[]) => {
      const valuesString = values.join(' - ');
      setPriceText(valuesString);
      onChange(values);
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

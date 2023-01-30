import { ChangeEvent, forwardRef, useEffect } from 'react';
import classNames from 'classnames';

import { dateMask } from '../../libs/inputmask';

import './Input.scss';

type InputTypes = 'email' | 'password' | 'text';

type Props = {
  type: InputTypes;
  title?: string;
  hasArrow?: boolean;
  isSubscribe?: boolean;
  arrowButtonDataType?: string;
  dataType?: string;
  placeholder?: string;
  value?: string;
  readOnly?: boolean;
  spellcheck?: boolean;
  autoComplete?: string;
  hasDateMask?: boolean;
  isLowerCase?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      type,
      title = '',
      hasArrow = false,
      isSubscribe = false,
      arrowButtonDataType = '',
      dataType = '',
      placeholder = '',
      value,
      readOnly = false,
      spellcheck = false,
      autoComplete = 'off',
      hasDateMask = false,
      isLowerCase = false,
      onChange,
    },
    ref
  ) => {
    useEffect(() => {
      if (hasDateMask) {
        dateMask.mask('.js-input_date-masked');
      }
    }, [hasDateMask]);

    return (
      <div className="input">
        {title && <h3 className="input__heading">{title}</h3>}
        <div className="input__wrapper">
          <input
            ref={ref}
            className={classNames('input__input', {
              'input__input_with-button': isSubscribe,
              input__input_lowercase: isLowerCase,
              'js-input_date-masked': hasDateMask,
            })}
            type={type}
            placeholder={placeholder}
            value={value}
            data-type={dataType}
            autoComplete={autoComplete}
            spellCheck={spellcheck}
            readOnly={readOnly}
            onChange={onChange}
          />
          {hasArrow && (
            <button
              type="button"
              className="input__arrow-button material-icons"
              data-type={arrowButtonDataType}
            >
              expand_more
            </button>
          )}
          {isSubscribe && (
            <button type="submit" className="input__button material-icons">
              arrow_forward
            </button>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };

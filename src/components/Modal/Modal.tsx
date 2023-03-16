import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import './Modal.scss';

type Props = {
  isActive: boolean;
  onClickClose: () => void;
  children?: ReactNode;
};

const Modal: FC<Props> = ({ isActive, onClickClose, children }) => {
  const handleModalCloseClick = () => {
    onClickClose?.();
  };

  return (
    <div
      className={classNames('modal', {
        modal_active: isActive,
      })}
    >
      <div
        className="modal__overlay"
        onClick={handleModalCloseClick}
        role="none"
      >
        <div
          role="none"
          className="modal__content"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            className="modal__close-btn"
            onClick={handleModalCloseClick}
            type="button"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export { Modal };

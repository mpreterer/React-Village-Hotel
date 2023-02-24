import { FC } from 'react';
import classNames from 'classnames';

import './Message.scss';

type Props = {
  type: 'invalid' | 'confirmed' | 'declined' | 'info';
  text: string;
};

const Message: FC<Props> = ({ type, text }) => {
  return (
    <div
      className={classNames('alert', {
        alert_type_invalid: type === 'invalid',
        alert_type_confirmed: type === 'confirmed',
        alert_type_declined: type === 'declined',
        alert_type_info: type === 'info',
      })}
    >
      <span className="alert__text">{text}</span>
    </div>
  );
};

export { Message };

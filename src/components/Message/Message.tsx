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
      className={classNames('message', {
        'message_type-invalid': type === 'invalid',
        'message_type-confirmed': type === 'confirmed',
        'message_type-declined': type === 'declined',
        'message_type-info': type === 'info',
      })}
    >
      <span className="message__text">{text}</span>
    </div>
  );
};

export { Message };

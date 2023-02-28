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
        message_type_invalid: type === 'invalid',
        message_type_confirmed: type === 'confirmed',
        message_type_declined: type === 'declined',
        message_type_info: type === 'info',
      })}
    >
      <span className="message__text">{text}</span>
    </div>
  );
};

export { Message };

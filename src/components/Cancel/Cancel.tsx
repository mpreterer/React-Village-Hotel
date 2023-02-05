import { FC } from 'react';

import './Cancel.scss';

const Cancel: FC = () => {
  return (
    <div className="cancel">
      <p className="cancel__title">Отмена</p>
      <span className="cancel__text">
        Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем
        за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за
        услуги.
      </span>
    </div>
  );
};

export { Cancel };

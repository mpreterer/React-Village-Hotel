import { FC } from 'react';

import './Cancel.scss';

const Cancel: FC = () => {
  return (
    <div className="cancel">
      <h2 className="cancel__title">Отмена</h2>
      <p className="cancel__text">
        Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем
        за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за
        услуги.
      </p>
    </div>
  );
};

export { Cancel };

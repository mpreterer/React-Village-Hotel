import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from './hooks/redux';
import { calculateRemainingTime } from './shared/helpers/calculateRemainingTime/calculateRemainingTime';
import {
  expirationTimeSelect,
  refreshTokenSelect,
} from './store/slices/auth/selectors';
import { reauthenticate } from './store/slices/auth/slice';
import { AppRoutes } from './routes';

const App = () => {
  const dispatch = useAppDispatch();
  const expirationTime = useAppSelector(expirationTimeSelect);
  const refreshToken = useAppSelector(refreshTokenSelect);

  useEffect(() => {
    if (expirationTime && refreshToken) {
      const remainingTime = calculateRemainingTime(expirationTime);

      if (remainingTime <= 0) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        dispatch(reauthenticate(refreshToken));
        return;
      }

      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        dispatch(reauthenticate(refreshToken));
      }, remainingTime);
    }
  }, [dispatch, expirationTime, refreshToken]);

  return <AppRoutes />;
};

export { App };

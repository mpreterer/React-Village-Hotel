import { FC } from 'react';

import { SignInForm } from '../../components/SignInForm/SignInForm';

import './SignIn.scss';

const SignIn: FC = () => {
  return (
    <main className="sign-in">
      <div className="sign-in__form">
        <SignInForm />
      </div>
    </main>
  );
};

export { SignIn };

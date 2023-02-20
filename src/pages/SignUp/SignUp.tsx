import { FC } from 'react';

import SignUpForm from '../../components/SignUpForm/SignUpForm';

import './SignUp.scss';

const SignUp: FC = () => {
  return (
    <main className="sign-up">
      <div className="sign-up__inner">
        <div className="sign-up__form">
          <SignUpForm />
        </div>
      </div>
    </main>
  );
};

export { SignUp };

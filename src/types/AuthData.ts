type SignUpData = {
  email: string;
  password: string;
  name: string;
  surname: string;
};

type SignUpPostData = {
  email: string;
  password: string;
  displayName: string;
  returnSecureToken: boolean;
};

type AuthResponseData = {
  idToken: string;
  refreshToken: string;
  localId: string;
  email: string;
  expiresIn: string;
  displayName: string;
};

export type { SignUpData, SignUpPostData, AuthResponseData };

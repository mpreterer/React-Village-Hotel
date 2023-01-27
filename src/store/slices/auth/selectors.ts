import { RootState } from '../../index';

const authSelect = (state: RootState) => state.auth;
const isAuthSelect = (state: RootState) => state.auth.isAuth;
const userNameSelect = (state: RootState) => state.auth.userName;

export { authSelect, isAuthSelect, userNameSelect };

import { SigninBody } from '../interface/SigninBody';
import { SignupBody } from '../interface/SignupBody';
import { LogoutBody } from '../interface/LogoutBody';
import fetcher from './fetcher';

export const auth = (mode: 'signin' | 'signup' | 'logout', body: SigninBody | SignupBody | LogoutBody | undefined) => {
	return fetcher(`${mode}`, body);
};

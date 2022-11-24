import { SigninBody } from '../interface/SigninBody';
import { SignupBody } from '../interface/SignupBody';
import fetcher from './fetcher';

export const auth = (mode: 'signin' | 'signup', body: SigninBody | SignupBody | undefined) => {
	return fetcher(`${mode}`, body);
};

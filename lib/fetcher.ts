import { LogoutBody } from '../interface/LogoutBody';
import { SigninBody } from '../interface/SigninBody';
import { SignupBody } from '../interface/SignupBody';

export default async function fetcher(
	url: string,
	data: undefined | SignupBody | SigninBody | LogoutBody
) {
	const res = await fetch(`/api/${url}`, {
		method: data ? 'POST' : 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	if (res.status > 299 && res.status < 200) {
		throw new Error();
	}
	return await res.json();
}

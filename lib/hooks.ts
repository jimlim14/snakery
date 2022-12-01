import useSWR from 'swr';
import fetcher from './fetcher';

export const useMe = () => {
	const { data, mutate, error } = useSWR('me', fetcher);

	return {
		user: data,
		isLoading: !data && !error,
		isError: data?.error || error,
		mutate
	};
};

// export const useGames = () => {
// 	const { data, error } = useSWR('game', fetcher);

// 	return {
// 		games: data,
// 		isLoading: !data && !error,
// 		isError: error,
// 	};
// };

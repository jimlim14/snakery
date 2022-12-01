import { Box, Button } from '@chakra-ui/react';
import { useMe } from '../lib/hooks';
import { auth } from '../lib/mutations';
import { useRouter } from 'next/router';

export default function Home() {
	const { user, mutate } = useMe();

	async function logout() {
		const updatedUser = await auth('logout', user);
		mutate(user);
	}

	return (
		<>
			<Box>good day {user?.firstName}</Box>
			<Button onClick={logout}>logout</Button>
		</>
	);
}

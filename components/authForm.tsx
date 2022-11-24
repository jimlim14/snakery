import { EmailIcon } from '@chakra-ui/icons';
import {
	Flex,
	Box,
	Input,
	Button,
	InputGroup,
	InputLeftElement,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { auth } from '../lib/mutations';

const AuthForm: FC<{mode: 'signin' | 'signup'}> = ({mode}) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

	function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
		setEmail(e.target.value);
	}

	function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
		setPassword(e.target.value);
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsLoading(true);

		const user = await auth(mode, {email, password});
    setIsLoading(false);
    router.push('/');
	}

	return (
		<Flex justify={'center'}>
			<Box width='50%'>
				<form onSubmit={handleSubmit}>
					<InputGroup>
						<InputLeftElement>
							<EmailIcon />
						</InputLeftElement>
						<Input
							placeholder='email'
							type='email'
							onChange={handleEmailChange}
						/>
					</InputGroup>
					<Input
						placeholder='password'
						type='password'
						onChange={handlePasswordChange}
					/>
					<Button type='submit' bg={'red'} isLoading={isLoading}>
						signup
					</Button>
				</form>
			</Box>
		</Flex>
	);
}

export default AuthForm;
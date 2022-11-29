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
import React, { useState } from 'react';
import { auth } from '../lib/mutations';

const AuthForm = ({ mode }: { mode: 'signin' | 'signup' }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const router = useRouter();

	function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
		setFirstName(e.target.value);
	}

	function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
		setLastName(e.target.value);
	}

	function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
		setEmail(e.target.value);
	}

	function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
		setPassword(e.target.value);
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsLoading(true);

		const user = await auth(mode, { email, password, firstName, lastName });
		if (!user.error) {
			setIsLoading(false);
			router.push('/');
		} else {
			setIsLoading(false);
			setError(user.error);
		}
	}

	return (
		<Flex justify={'center'}>
			<Box width='50%'>
				<form onSubmit={handleSubmit}>
					{mode === 'signup' && (
						<>
							<Input
								placeholder='First Name'
								type='firstName'
								onChange={handleFirstNameChange}
							/>
							<Input
								placeholder='Last Name'
								type='lastName'
								onChange={handleLastNameChange}
							/>
						</>
					)}
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
						{mode}
					</Button>
					{error && <>{error}</>}
				</form>
			</Box>
		</Flex>
	);
};

export default AuthForm;

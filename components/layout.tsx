import { Box } from '@chakra-ui/react';
import { Layout } from '../interface/Layout';

const Layout = ({ children }: Layout) => {
	return (
		<Box width='100vw' height='100vh'>
			<Box position='absolute' top='0' left='0' height='150px' bg='red'>
				header
			</Box>
			<Box position='absolute' top='150px' left='0' bg='green'>
				sidebar
			</Box>
			<Box position='absolute' left='100px' top='150px'>{children}</Box>
			<Box position='absolute' bottom='0' height='150px' bg='yellow'>
				footer
			</Box>
		</Box>
	);
};

export default Layout;

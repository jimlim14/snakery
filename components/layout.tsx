import { Box, Flex, ButtonGroup, Button, Spacer } from '@chakra-ui/react';
import { Layout } from '../interface/Layout';
import Header from './header';
import Sidebar from './sidebar';

const Layout = ({ children }: Layout) => {
	return (
		<Box width='100vw' height='100vh'>
			<Box
				position='absolute'
				top='0'
				left='0'
				height='150px'
				width='100%'
				bg='red'
			>
				<Header />
			</Box>
			<Box
				position='absolute'
				height='calc(100vh - 300px)'
				width='150px'
				top='150px'
				left='0'
				bg='green'
			>
				<Sidebar />
			</Box>
			<Box position='absolute' left='150px' top='150px'>
				{children}
			</Box>
			<Box
				width='100%'
				position='absolute'
				bottom='0'
				height='150px'
				bg='yellow'
			>
				footer
			</Box>
		</Box>
	);
};

export default Layout;

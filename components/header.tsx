import { Box, Button, ButtonGroup, Flex, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  return (
		<Flex height='100%' minWidth='max-content' alignItems='center' gap='2'>
		  <Box p='10'>
        <Text>Snakery</Text>
      </Box>
		  <Spacer />
		  <ButtonGroup gap='2' p='10'>
		    <Button colorScheme='teal'>
          <Link href='/signup'>Sign Up</Link>
        </Button>
		    <Button colorScheme='teal'>
          <Link href='/login'>Log In</Link>
        </Button>
		  </ButtonGroup>
		</Flex>
	);
}

export default Header;
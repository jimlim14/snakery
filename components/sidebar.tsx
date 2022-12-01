import { Box } from "@chakra-ui/react";
import { useMe } from "../lib/hooks";

const Sidebar = () => {
  const { user, isLoading, isError } = useMe();

  function test() {
    if (isLoading) return <Box>loading</Box>
    if (isError) return <Box>something is wrong</Box> 
    return user.games.map((game: any) => (
      <Box key={game.id}>
        {game.difficulty}
      </Box>
    ))
  }

  return (
    <Box height='100%'>
      sidebar
      {test()}
    </Box>
  )
}

export default Sidebar;
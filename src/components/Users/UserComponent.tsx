import { Button, Stack, VStack, HStack, Flex, Box, Text, Image, Avatar, Show, useColorMode} from "@chakra-ui/react"
import {useUsersStore} from "store"
import { UsersList } from "./UsersList"

export const UserComponent = () => {
  const setRandomUsers = useUsersStore(store => store.setRandomUsers)
  const { colorMode } = useColorMode()


  return (
    <VStack h="100%" w="auto" overflowY="auto" overflowX="hidden"  pt="10px" direction="row" fill="red" borderRight={"3.5px solid rgba(0,0,0,0.2)"}>

      <Show breakpoint='(min-width: 600px)'>
        <Text w="150px" textAlign="center" fontSize="3xl" fontWeight="bold" color={colorMode === "dark" ? "blackAlpha.900" : "blackAlpha.300"}>USERS</Text>
      </Show>

      <UsersList />
    
      <Box m="30px">
        <Button minH="40px" w="auto" disabled onClick={setRandomUsers}>RANDOM</Button>
      </Box>
      
    </VStack>
  )
}




import { Button, Stack, VStack, HStack, Flex, Box, Text, Image, Avatar, Show, useColorMode} from "@chakra-ui/react"
import { useEffect } from "react"
import {useUsersStore} from "store"
import PaginatedUsersList from "./PaginatedUsersList"

export const UserComponent = () => {
  const setRandomUsers = useUsersStore(store => store.setRandomUsers)
  const randomUsers = useUsersStore(store => store.randomUsers)
  const { colorMode } = useColorMode()

  useEffect(()=>{
    if(!randomUsers.length){
      setRandomUsers()
    }
  },[randomUsers])

  return (
    <VStack h="100%" w="auto" overflowY="auto" overflowX="hidden"  pt="10px" direction="row" fill="red" borderRight={"3.5px solid rgba(0,0,0,0.2)"}>

      <Show breakpoint='(min-width: 600px)'>
        <Text w="200px" textAlign="center" fontSize="3xl" fontWeight="bold" color={colorMode === "dark" ? "blackAlpha.900" : "blackAlpha.300"}>USERS</Text>
      </Show>

      <Flex width="100%" justify="center">
        <Button mb="10px" minH="30px" minW="90%" p={0} fontSize={"1.2vw"} onClick={setRandomUsers}>RANDOM</Button>
      </Flex>

      <PaginatedUsersList />
    
    </VStack>
  )
}



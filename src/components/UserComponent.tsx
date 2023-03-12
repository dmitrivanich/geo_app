import { Button, Stack, VStack, HStack, Flex, Box, Text, Image, Avatar, Show, useColorMode} from "@chakra-ui/react"
import { User } from "types"
import {useUsersStore} from "store"
import { useEffect } from "react"
import { getUsersFromServer } from "utils"

export const UserComponent = () => {
  const users = useUsersStore(store => store.users)
  const addUser = useUsersStore(store => store.addUser)
  const { colorMode } = useColorMode()

  useEffect(() => {
    // getUsersFromServer()
  }, [])

  return (
    <VStack h="100%" w="auto" overflowY="auto" overflowX="hidden"  pt="10px" direction="row" fill="red" borderRight={"3.5px solid rgba(0,0,0,0.2)"}>
      <Show breakpoint='(min-width: 600px)'>
        <Text fontSize="3xl" fontWeight="bold" color={colorMode === "dark" ? "blackAlpha.900" : "blackAlpha.400"} >USERS</Text>
      </Show>

      <VStack spacing={1}>
        {users.map((user:User, index:number)=>(
          <Flex p="10px" align="center" justify="center" w="100%" bg={colorMode === "dark" ? "blackAlpha.400" : "blackAlpha.100"} key={index}>
            <Avatar size="md" name={`${user.name} ${user.middleName}`} src='https://bit.ly/dan-abramov' />
            <Show breakpoint='(min-width: 600px)'>
              <Text ml="5px" textAlign="center" fontSize="xs" fontWeight="semibold" color={colorMode === "dark" ? "whiteAlpha.900" : "black"}>
                {user.name} {user.middleName} {user.surname}
              </Text>
            </Show>
          </Flex>
        ))}
      </VStack>
      
      <Box m="30px">
        <Button minH="40px" w="1" disabled onClick={() => addUser(undefined)}>+</Button>
      </Box>
    </VStack>
  )
}


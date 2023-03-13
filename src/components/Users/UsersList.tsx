import { Button, Stack, VStack, HStack, Flex, Box, Text, Image, Avatar, Show, useColorMode} from "@chakra-ui/react"
import { RandomUser, User } from "types"
import {useUsersStore} from "store"
import { useEffect } from "react"

export const UsersList = () => {
  const randomUsers = useUsersStore(store => store.randomUsers)
  const setRandomUsers = useUsersStore(store => store.setRandomUsers)
  const { colorMode } = useColorMode()

  useEffect(() => {
    setRandomUsers()
  }, [])

  return (
    <VStack spacing={1}>
      {
        randomUsers.map((user: RandomUser, index:number)=> (
          <Flex p="10px" align="center" justify="center" w="100%" bg={colorMode === "dark" ? "blackAlpha.400" : "blackAlpha.100"} key={index}>
            <Avatar size="md" name={`${user.name.first} ${user.name.last}`} src={user.picture.medium} />
            <Show breakpoint='(min-width: 600px)'>
              <Text ml="5px" textAlign="center" fontSize="xs" fontWeight="semibold" color={colorMode === "dark" ? "whiteAlpha.900" : "black"}>
                {user.name.title} {user.name.first} {user.name.last}
              </Text>
            </Show>
          </Flex>
        ))
      } 
    </VStack>
  )
}
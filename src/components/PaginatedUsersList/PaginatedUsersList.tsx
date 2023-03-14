import { Button, Stack, VStack, HStack, Flex, Box, Text, Image, Avatar, Show, useColorMode} from "@chakra-ui/react"
import { RandomUser, User } from "types"
import {useUsersStore} from "store"
import { useEffect,useState } from "react"
import ReactPaginate from 'react-paginate';
import './pagination.css';

export function PaginatedUsersList() {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3
  const randomUsers = useUsersStore(store => store.randomUsers)

  const endOffset = itemOffset + itemsPerPage;
  const currentItems:RandomUser[] = randomUsers.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(randomUsers.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event:any) => {
    const newOffset = (event.selected * itemsPerPage) % randomUsers.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <UsersList currentUsers={currentItems} />

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        activeClassName={'item active '}
        breakClassName={'item break-me '}
        containerClassName={'pagination'}
        disabledClassName={'disabled-page'}
        marginPagesDisplayed={2}
        nextClassName={"item next "}
        pageClassName={'item pagination-page '}
        previousClassName={"item previous"}
      />
    </>
  );
}

const UsersList = ({currentUsers}:{currentUsers:RandomUser[]}) => {
  const { colorMode } = useColorMode()

  return (
    <VStack w="100%" spacing={1}>
      {
        currentUsers.map((user: RandomUser, index:number)=> (
          <Flex p="10px" align="center" justify="space-around" w="100%" bg={colorMode === "dark" ? "blackAlpha.400" : "blackAlpha.100"} key={index}>
            <Avatar size="md" name={`${user.name.first} ${user.name.last}`} src={user.picture.medium} />
            <Show breakpoint='(min-width: 600px)'>
              <Text ml="5px" w="70px" textAlign="center" fontSize="xs" fontWeight="semibold" color={colorMode === "dark" ? "whiteAlpha.900" : "black"}>
                {user.name.title} {user.name.first} {user.name.last}
              </Text>
            </Show>
          </Flex>
        ))
      } 
    </VStack>
  )
}
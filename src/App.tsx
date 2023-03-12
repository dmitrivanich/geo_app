import { VStack, HStack, Flex, useColorMode, Button, Icon } from "@chakra-ui/react"
import { UserComponent } from "components/UserComponent"
import { PlanComponent } from "components/PlanComponent"
import {SunIcon, MoonIcon} from '@chakra-ui/icons'

function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Flex position="relative" h={"100vh"} w={"100vw"} justify="space-around" flex="true" className="App">
        <UserComponent/>
        <PlanComponent/>
      </Flex>

      <Button bg="whiteAlpha.600" position="absolute" right="10px" top="10px" onClick={toggleColorMode}>
        <Icon color="black" as={colorMode === "dark" ? MoonIcon : SunIcon}/>
      </Button>
    </>
  )
}

export default App

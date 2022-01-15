import React from 'react';
import { ChakraProvider, Container, useBreakpoint } from '@chakra-ui/react';
import { Image,Heading } from '@chakra-ui/react'
import { Button, MenuItem,Menu,MenuList,MenuButton } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import {Flex,Box,Spacer,Text } from '@chakra-ui/react'
import Homepage from './Pages/Homepage';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { data } from './data';
import Info from './Pages/Info';
import breakpoint from './theme';
  import { createBreakpoints } from '@chakra-ui/theme-tools'
import Contact from './Pages/Contact';
function App() {


  const breakpoin = createBreakpoints({
  ...breakpoint
  })
  return (
  
    <ChakraProvider >
   <Container overflowX="hidden" maxWidth="100%" w={{ base: "100%",sm:"100%", lg: "80%" }}>
   <Flex justify="center" align="center" direction={{base:"column",md:"row"}}  align="center" width='100%' border='1px' p='2' marginTop={10} borderRadius='16' borderColor='gray.400'>
        <Box p='2' color='dark'>
          <Heading size='md'>Programlama Dilleri</Heading>
        </Box>
        <Spacer />
        <Box display='flex' align='center' w={{base:"90%",md:"auto"}} flexGrow={true} flexDirection={{base:"column",md:"row"}} gap={4} flexGrow={true} flexWrap={true}>
          <Button  colorScheme='gray'>
            <Link to="/">Ana Sayfa</Link>
          </Button>
          <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
         Diller
        </MenuButton>
        <MenuList>
         {data.map((item,key) => 
           <Link to={item.link}><MenuItem>{item.name}</MenuItem></Link>
         )}
        </MenuList>
      </Menu>
      <Link to="/iletisim" width="100%"><Button width="100%" colorScheme='gray'>İletişim</Button></Link>
        </Box>
      </Flex>
 <Routes>
   <Route path="/" element={<Homepage/>}/>
   {data.map((item) => 
        <Route key={item.name} path={item.link} element={<Info data={item}/>}/>
     )}
  <Route path="/iletisim" element={<Contact/>}/>
 </Routes>
</Container>
    </ChakraProvider>
  );
}

export default App;

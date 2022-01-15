import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import breakpoint from "../theme";
import cont from "../img/contact.svg";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Link
} from "@chakra-ui/react";


const Contact = () => {
  const b = createBreakpoints({
    ...breakpoint,
  });
  return (
    <Flex
    height="60vh"
    gap={10}
      align="center"
      mt={5}
      justify={{base:"center",lg:"space-between"}}
      direction={{ base: "column", lg: "row" }}
    >
      <Image src={cont} w={{ base: "80%", lg: "40%" }} />
      <Flex width="90%" direction="column">
        <FormControl width="100%">
          <FormLabel htmlFor="email">E-Mail</FormLabel>
          <Input id="email" type="email" placeholder="E-Mail Adresin" backgroundColor="gray.100" />
          <FormHelperText>Ad Soyad: Mert Bakımcı</FormHelperText>
          <FormHelperText>Telefon: 0533 854 3132</FormHelperText>
        
         <Link href="mailto:bkmmert2004@gmail.com" target="_blank">
         <Button
            mt={4}
            colorScheme='gray'
            type='submit'
          >
            Gönder
          </Button>
         </Link>
   
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default Contact;

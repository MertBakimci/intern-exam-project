import { Flex, Image, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import breakpoint from "../theme";
import { UnorderedList, ListIcon, ListItem } from "@chakra-ui/react";
import javascript from '../img/js.gif';

const Info = ({ data }) => {
  const b = createBreakpoints({
    ...breakpoint,
  });
  return (
    <Flex gap={4} direction="column" marginTop={10}>
         <Image
        border="1px"
        p="2"
        borderRadius="10"
        borderColor="gray.400"
        w={{ base: "90%", xl: "70%" }}
        src={data.banner}
      />
      <Heading>{data.heading}</Heading>
      <Text fontSize="l">{data.info}</Text>
      {data.framework && 
        <Flex direction="column" gap={2}>
        <Text fontSize="xl">{data.name + " Frameworklerinden bazıları;"}</Text>
      <UnorderedList paddingLeft={0}>
        <ListItem>React</ListItem>
        <ListItem>Vue.js</ListItem>
        <ListItem>AJAX</ListItem>
        <ListItem>Angular</ListItem>
      </UnorderedList>
      </Flex>
      }
      <Image 
       border="2px"
       p="2"
       borderRadius="10"
       borderColor="gray.400"
       w={{ base: "95%", xl: "75%" }}
      src={data.animatedGif}/>
      <Flex mb={10} direction="column" gap={2}>
        <Text textDecoration="underline" size="xl" color="gray.700">
          {"Kurucu: " + data.creator}
        </Text>
        <Text textDecoration="underline" size="xl" color="gray.700">
          {"Kurulma Tarihi: " + data.date}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Info;

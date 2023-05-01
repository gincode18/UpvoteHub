import { Box, Flex, Image } from "@chakra-ui/react";
import React from 'react';
import SearchInput from "./SearchInput";



const Navbar:React.FC = () => {
    
    return (

        <Flex
        bg="white"
        height="44px"
        padding="6px 12px"
        justifyContent={{ md: "space-between" }}
      >
        <Flex
          align="center"
          width={{ base: "40px", md: "auto" }}
          mr={{ base: 0, md: 2 }}
          cursor="pointer"
        
        >
          <Image src="/images/redditFace.svg" height="30px" alt=""/>
          <Image
            display={{ base: "none", md: "unset" }}
            src="/images/redditText.svg"
            alt=""
            height="46px"
          />
        </Flex>
        <SearchInput></SearchInput>
      </Flex>
        )
}
export default Navbar;
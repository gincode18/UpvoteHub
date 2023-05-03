import { auth } from "@/firebase/clientApp";
import { Box, Flex, Image } from "@chakra-ui/react";
import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import AuthModal from "../Modal/Auth/AuthModal";
import Directory from "./Directory/Directory";
import AuthButtons from "./RightContet/AuthButtons";
import RightContent from "./RightContet/RightContent";
import SearchInput from "./SearchInput";




const Navbar:React.FC = () => {
  const [user] = useAuthState(auth);
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
        <Directory></Directory>
        <SearchInput></SearchInput>
       
        <RightContent user={user}></RightContent>
      </Flex>
        )
}
export default Navbar;
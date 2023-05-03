import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import AuthModal from "../../Modal/Auth/AuthModal";
import AuthButtons from "./AuthButtons";
import Icons from "./Icons";
import MenuWrapper from "./ProfileMenu/MenuWrapper";
import { Auth } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/clientApp";
type RightContentProps = {
  user?: User | null;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justifyContent="space-between" alignItems="center">
        {user ? <Icons></Icons> : <AuthButtons />}
        <MenuWrapper />
      </Flex>
    </>
  );
};
export default RightContent;

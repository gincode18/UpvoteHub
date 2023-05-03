import React, { useEffect } from "react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import AuthInputs from "./Inputs";
import OAuthButtons from "./OAuthButtons";
import ResetPassword from "./ResetPassword";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";

type AuthModalProps = {};


const AuthModal: React.FC<AuthModalProps> = () => {
  const toggleView = (view: string) => {
    setModalState({
      ...modalState,
      view: view as typeof modalState.view,
    });
  };
  const [modalState, setModalState] = useRecoilState(authModalState);
  const [user,loading,error]=useAuthState(auth)
  const handleClose = () =>
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
    useEffect(()=>{
      if(user){
        handleClose()
      }
    },[user])
  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            {modalState.view === "login" && "Login"}
            {modalState.view === "signup" && "Sign Up"}
            {modalState.view === "resetPassword" && "Reset Password"}
          </ModalHeader>{" "}
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            pb={6}
          >
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              width="70%"
              border="1px solid red"
            >
              {modalState.view === "login" || modalState.view === "signup" ? (
            <>
              <OAuthButtons />
              OR
              <AuthInputs toggleView={toggleView} />
            </>
          ) : (
           <ResetPassword toggleView={toggleView}></ResetPassword>
          )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;

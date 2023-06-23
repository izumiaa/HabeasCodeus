'use client';

import {
  Box, Text, VStack, Flex, Input, InputGroup, InputLeftElement, Divider,
  Avatar,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import "./style.css";
import {BsFillSendFill} from 'react-icons/bs';

const CheckCode = (props: any) => {
  const [passcode, setPasscode] = useState("");

  const onChange = (event: any) => {
    const newCode = event.target.value;
    console.log(newCode)
    setPasscode(newCode);
  };

  const onKeyDown = (e: any) => {
    if (e.key == "Enter") {
      console.log("key pressed is enter")
      if (passcode === "123") {
        props.onKeyDown(true)
      }else {
        alert("Error: Wrong password");
      }
    }
  }

  return (
    <Box position="relative" zIndex="2" h="50px" w="200px">
      <Text fontSize="20px" fontWeight="400"
        fontFamily="Inter" >Enter your code here:</Text>
      <Box >
        <div className="field-group">
          <input type="text" id="goals" name="goals"
            className="input-field" onChange={onChange} onKeyDown={onKeyDown} />
        </div>
      </Box>
    </Box>
  )
}

const ChatBox = (props) => {
  const [chatIsOpen, setChatIsOpen] = useState(true);

  return (
    <>
      <Flex justifyContent="center" position="relative" zIndex="1">
        <Box w="45vw" h="70vh" bg="#abb8c3" borderRadius="20px" display="flex"
          position="relative" zIndex="1" flexDirection="column" mt="2em"
          justifyContent="center" alignContent="center"
        >
          <Flex alignContent="center" alignItems="center" ml="30px" mt="15px" border="2px"
          >
            <Avatar src="/lawyerIcons/guy8.jpeg" h="4em" w="4em" borderRadius="50%" />
            <Text fontFamily="Inter" fontSize="20px" ml="20px">Private Chat with Jessica Lee</Text>
            <Box mb="0.5rem" mt="0.5rem" borderBottomWidth="5px" maxW="50vw"></Box>
          </Flex>
          <Flex flex="1" flexDirection="column" justifyContent="flex-end" alignItems="flex-end"
            filter={chatIsOpen ? 'blur(3px)' : 'none'}>
            <Input disabled={props.disable} placeholder="Type your message here" width="75%"
              outline="none" borderRadius="20px" mb="15px" mr="20px"
              padding="5px 0px 5px 15px" />
          </Flex>
        </Box>
      </Flex>
    </>
  )
}

const Chat = () => {
  const [isCorrectPasscode, setisCorrectPasscode] = useState(false);
  const callback = (name: boolean) => {
    setisCorrectPasscode(name);
    console.log("you are doing great");
  }

  return (
    <>
      <Box >
        <Flex justifyContent="center" position="relative" zIndex="1">
          <Box w="45vw" h="70vh" bg="#abb8c3" borderRadius="20px" display="flex"
            position="relative" zIndex="1" flexDirection="column" mt="2em"
            justifyContent="center" alignContent="center"
          >
            <Flex alignContent="center" alignItems="center" ml="30px" mt="15px" border="2px"
            filter={isCorrectPasscode ? "none" : "blur(3px)"} 
            >
              <Avatar src="/lawyerIcons/guy8.jpeg" h="4em" w="4em" borderRadius="50%" />
              <Text fontFamily="Inter" fontSize="20px" ml="20px">Private Chat with Jessica Lee</Text>
              <Box mb="0.5rem" mt="0.5rem" borderBottomWidth="5px" maxW="50vw"></Box>
            </Flex>

            <Flex ml="2rem" flex="6" flexDirection="column"
              justifyContent="center" alignItems="center" filter="none">
              {!isCorrectPasscode && <CheckCode onKeyDown={callback} />}
            </Flex>

            <Flex flex="1" flexDirection="column" justifyContent="flex-end" alignItems="flex-end"
            filter={isCorrectPasscode ? "none" : "blur(3px)"} >
              <Input isDisabled={!isCorrectPasscode} placeholder="Type your message here" width="80%"
                outline="none" borderRadius="20px" mb="15px" mr="20px" ml="20px"
                padding="5px 0px 5px 15px" />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
{/* <Flex ml="2rem" flex="3" justifyContent="center" alignItems="center" filter="none">
{chatIsOpen && <CheckCode />}
</Flex> */}

export default Chat;
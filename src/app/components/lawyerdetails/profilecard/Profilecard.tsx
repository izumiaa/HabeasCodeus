import {
    Box,
    FormControl, FormLabel,
    Input,
    Stack,
    Button, IconButton,
    Text, Image, Badge,
    Flex,
    Select,
    // FormErrorMessage,
    Heading,
    Icon,
    InputGroup,
    InputRightElement,
    ChakraProvider,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Card, CardHeader, CardBody, CardFooter, Divider, Avatar, PinInputDescendantsProvider
} from '@chakra-ui/react';


import { FiFacebook } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import banner from ".//banner.png"
import pp from ".//profile pic.png"
import { TbBookmark } from 'react-icons/tb';
import { HiBookmark } from 'react-icons/hi'
import { BiDotsVerticalRounded } from 'react-icons/bi';
import {BsArrowUpRight,BsChatDots} from 'react-icons/bs'
import {useRouter} from 'next/navigation';
import Chat from '../../lawyerchat/Chat';


export interface ProfilecardProps {
    name: string;
    icon: string;
    gender: string;
    languages: string;
    specialty: string;
}

const Profilecard: React.FC<ProfilecardProps> = ({
    name, icon,gender,languages,specialty
}) => {
    const router = useRouter();

    const [chatIsOpen, setChatIsOpen] = useState(false);
    const onClick=()=>{
        setChatIsOpen(true);
        router.push("/chat")
    }

    return (
        <>
        {/* bg="#e7d0ca" */}

            <Box width="21em" h="12em" position="relative" zIndex={1}
                bg="#abb8c3" borderRadius="20px"
                display="flex" flexDirection="row"
                alignItems="center" justifyContent="center">

                <Box mr="7px">
                    <Avatar src={icon} h="6em" w="6em" borderRadius="50%" />
                </Box>
                
                <Flex flexDirection="column" mt="10px" ml="10px">
                <Box display="flex" flexDirection="column"  mr="10px">
                    <Text fontFamily="Inter"
                        fontSize="30px" fontWeight="600" color="#110B03">{name}</Text>
                    <Flex>
                        <Text fontSize="13px" fontWeight="500" >
                            Gender:
                        </Text>
                        <Text fontSize="13px" fontWeight="400" ml="3px">
                            {gender}
                        </Text>
                    </Flex>
                    <Flex>
                        <Text fontSize="13px" fontWeight="500" >
                            Langauges:
                        </Text>
                        <Text fontSize="13px" fontWeight="400" ml="3px">
                            {languages}
                        </Text>
                    </Flex>
                    <Flex>
                        <Text fontSize="13px" fontWeight="500" >
                            Specialty:
                        </Text>
                        <Text fontSize="13px" fontWeight="400" ml="3px">
                            {specialty}
                        </Text>
                    </Flex>
                </Box>

                <Flex gap="10px" mt="15px" ml="-2px">
                        <Box display="flex">
                        <Text fontSize="13px" fontWeight="500" as='i' mr="5px"
                        style={{ cursor: 'pointer' }}>
                            View details
                        </Text>
                        <BsArrowUpRight size="10px" />
                        </Box>
                        <Text fontSize="13px" fontWeight="500" as='i'
                        onClick={onClick} style={{ cursor: 'pointer' }}>
                            Chat
                        </Text>
                        <Box mt="-5px" ml="-1px">
                        <BsChatDots size="15px" />
                        </Box>
                    </Flex>

                    </Flex>
            </Box>


        </>
    );
}


export default Profilecard;
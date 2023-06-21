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

export interface ProfilecardProps {
    name: string;
    icon: string;
    age: string;
    gender: string;
    bio: string;
    tags: string;
}

const Profilecard: React.FC<ProfilecardProps> = ({
    name, icon, age, gender, bio, tags
}) => {

    return (
        <>
            <Box width="21em" h="12em"
                bg="#e7d0ca" borderRadius="20px"
                display="flex" flexDirection="row"
                alignItems="center" justifyContent="center">

                <Box mr="7px">
                    <Avatar src="" h="6em" w="6em" />
                </Box>
                
                <Flex flexDirection="column" mt="10px" ml="10px">
                <Box display="flex" flexDirection="column"  mr="10px">
                    <Text
                        fontSize="28px" fontWeight="600" color="#110B03">{name}</Text>
                    <Flex>
                        <Text fontSize="13px" fontWeight="500" >
                            Gender:
                        </Text>
                        <Text fontSize="13px" fontWeight="400">
                            "female"
                        </Text>
                    </Flex>
                    <Flex>
                        <Text fontSize="13px" fontWeight="500" >
                            Langauges:
                        </Text>
                        <Text fontSize="13px" fontWeight="400">
                            "female"
                        </Text>
                    </Flex>
                    <Flex>
                        <Text fontSize="13px" fontWeight="500" >
                            Specialty:
                        </Text>
                        <Text fontSize="13px" fontWeight="400">
                            "female"
                        </Text>
                    </Flex>
                </Box>

                <Flex gap="10px" mt="15px" ml="-2px">
                        <Box display="flex">
                        <Text fontSize="13px" fontWeight="500" as='i' mr="5px">
                            View details
                        </Text>
                        <BsArrowUpRight size="10px" />
                        </Box>
                        <Text fontSize="13px" fontWeight="500" as='i'>
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
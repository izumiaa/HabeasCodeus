'use client';

import Profilecard from "@/app/components/lawyerdetails/profilecard/Profilecard";
import { Box, Text, VStack, Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const Lawyers = () => {
    return (
        <Flex flexDirection="column" bg="#F7FAFC" h="100vh" pt="0"
        position="relative" zIndex="1"
        justifyContent="center" alignItems="center">

            <Flex flexDirection="column" w="45vw" mt="30px">
            <Text textAlign="center" fontSize="30px" fontWeight="500">
                Our Partner Lawyers
            </Text>
            <Text mt="10px" textAlign="center" fontSize="15px" fontWeight="400" color="#4E4E4E">
            We are grateful to compassionate pro bono lawyers working 
            with us to help you. They are a group of skilled lawyers who
            specialize in a wide range of legal fields.
            </Text>
            </Flex>

            <Flex bg="#abb8c3" w="80vw" h="100vh" justifyContent="center" mt="30px">
            <Profilecard name="Sherlin Choo"icon="" age="18" gender="female" bio="" tags=""/>
            </Flex>
        </Flex>
    )
}

export default Lawyers;

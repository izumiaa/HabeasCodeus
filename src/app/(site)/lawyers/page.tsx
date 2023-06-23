'use client';

import Profilecard from "@/app/components/lawyerdetails/profilecard/Profilecard";
import { Box, Text, VStack, Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const Lawyers = () => {
    var lawyerData = require("./MOCK_DATA.json")

    return (
        <Flex flexDirection="column" bg="#F7FAFC" h="100vh" pt="0"
        position="relative" zIndex="1" 
        justifyContent="center" alignItems="center">

            <Flex position="relative" flexDirection="column" w="45vw" mt="30px">
            <Text textAlign="center" fontSize="30px" fontWeight="500" fontFamily="Inter">
                Our Partner Lawyers
            </Text>
            <Text mt="10px" textAlign="center" fontSize="17px" fontFamily="Inter" fontWeight="400" color="#4E4E4E">
            We are grateful to compassionate pro bono lawyers working 
            with us to help you. They are a group of skilled lawyers who
            specialize in a wide range of legal fields.
            </Text>
            </Flex>

            {/* bg="#abb8c3"  */}
            <Box w="85vw" h="100vh" justifyContent="space-between" mt="30px" 
            display="flex" flexDirection="row" flexWrap="wrap" padding="1rem">
            {lawyerData.map((data:any,index:any)=>{
                return(
                <Box key={index} >
                    <Profilecard 
                    name={data.full_name} 
                    gender={data.gender}
                    languages={data.languages}
                    specialty={data.specialty}
                    icon={data.icon} />
                </Box>
                )
            })}
            </Box>
        </Flex>
    )
}

export default Lawyers;

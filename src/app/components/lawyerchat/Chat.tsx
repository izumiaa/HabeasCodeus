'use client';

import { Box, Text, VStack, Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";


const Chat = () => {
    return (
        <Flex justifyContent="center" zIndex="99">
            <Box w="45vw" h="70vh" bg="#abb8c3" borderRadius="20px">
                <Text>Private Chat with Jessica Lee</Text>
                <Input placeholder="Type your message here"
                 outline="none" borderRadius="20px" width="70%"
                 height="8%" />
            </Box>
        </Flex>
    )
}

export default Chat;
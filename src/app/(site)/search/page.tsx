'use client';

import Summary from "@/app/components/summary/Summary";
import { Box, Text, VStack, Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from 'react-icons/bs';

// #abb8c3
const Search = () => {
    return (
        <>
            <Flex flexDirection="column" bg="#abb8c3" h="100vh" pt="0"
                position="relative" zIndex="1" >
                {/* search bar */}
                <Flex flexDirection="row" justifyContent="center" alignItems="center">
                    <InputGroup w="30em" h="2.5em" flexDirection="row" alignItems="center" mt="20" mb="20">
                        <InputLeftElement pointerEvents='none' mt="12" ml="13">
                            <BsSearch />
                        </InputLeftElement>
                        <Input type="text" placeholder="Search"
                            errorBorderColor='crimson' pl="40"
                            borderRadius="15px" bg="#FFFFFF" w="100%" border="none"
                            boxShadow="0px 2px 10px rgba(0, 0, 0, 0.25)" />
                    </InputGroup>
                </Flex>

                <Flex flexDirection="column" justifyContent="center" alignItems="center"
                gap="20">
                <Summary/>
                <Summary/>
                <Summary/>
                </Flex>
            </Flex>


        </>
    )

}

export default Search;

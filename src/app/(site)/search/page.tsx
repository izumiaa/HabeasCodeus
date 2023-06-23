'use client';

import Summary from "@/app/components/summary/Summary";
import { Box, Text, VStack, Flex, Input, InputGroup, InputLeftElement, InputRightElement,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,} from "@chakra-ui/react";
import { BsSearch } from 'react-icons/bs';
import {MdKeyboardVoice} from 'react-icons/md';

// #abb8c3
const Search = () => {

    var caseData = require("./MOCK_SEARCH_DATA.json")

    return (
        <>
            <Flex flexDirection="column" bg="#abb8c3" pt="0"
                position="relative" zIndex="1" >
                {/* search bar */}
                <Flex flexDirection="row" justifyContent="center" alignItems="center">
                    <InputGroup w="30em" h="2.5em" flexDirection="row" alignItems="center" mt="20" mb="20">
                        <InputLeftElement pointerEvents='none' mt="12" ml="13">
                            <BsSearch />
                        </InputLeftElement>
                        <InputRightElement mt="10" mr="8"> 
                        <MdKeyboardVoice size="1.2em"/>
                        </InputRightElement>
                        <Input type="text" placeholder="Search"
                        _focus={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}
                            errorBorderColor='crimson' pl="40"
                            borderRadius="15px" bg="#FFFFFF" w="100%" border="none"
                            boxShadow="0px 2px 10px rgba(0, 0, 0, 0.25)" />
                    </InputGroup>
                </Flex>

                <Flex flexDirection="column" justifyContent="center" alignItems="center" mt="10px" overflow-auto gap="20">
  {caseData.map((data: any, index: any) => {
    return (
      <Box id={index}>
                        <Summary
                title={data.Title}
                field={data.Summary.Field}
                familial_relation={data.Summary.Familial_relation}
                issue={data.Summary.Issue}
                reason={data.Summary.Reason}
                verdict={data.Summary.Verdict}
              />
      </Box>
    );
  })}
</Flex>

            </Flex>


        </>
    )

}

export default Search;

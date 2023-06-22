'use client';

import "./style.css";
import { signOut } from "next-auth/react";
import {
    Box, Text, VStack, Flex, Input, Divider,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";

const HomePage = () => {
    return (
        <>
            <Flex flexDirection="column" mt="3em" ml="5em">

                <Box display="flex" flexDirection="column">
                    <Text fontSize='60px'
                        fontFamily="Inter"
                        fontWeight="700" >
                        Welcome back, Sherlin!
                    </Text>
                    <Flex flexDirection="row">
                        <Text fontSize='20px'
                            fontFamily="Inter" color="#4E4E4E"
                            fontWeight="400" ml="1rem">
                            What do you want to do today?
                        </Text>
                        <Box mt="-10px">
                            <div className="field-group">
                                <input type="text" id="goals" name="goals"
                                    className="input-field"  />
                            </div>
                        </Box>
                    </Flex>
                </Box>

                <Box mt="5em" ml="1rem" padding="10px" 
                maxW="50vw" borderRadius="20px" bg="#e7d0ca">
                    <Text mt="0.5rem"
                        fontSize='18px'
                        fontFamily="serif"
                        fontWeight="500">
                        Need help?
                    </Text>
                    <Accordion allowToggle allowMultiple gap="50">
                        <AccordionItem mt="0.5rem">
                            <h2>
                                <AccordionButton _expanded={{ bg: '#abb8c3', color: 'white' }} 
                                fontFamily="serif" maxW="50vw">
                                    <Box as="span" flex='1' textAlign='left' maxW="50vw" 
>
                                        There are some legal terms I woud like to clarify.
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel fontFamily="serif">
                                <Box maxW="50vw" overflowWrap="break-word"> 
                                You've come to the right place! Our friendly AI chatbot is more than
                                happy to assist you in understanding legal terms, and to explain different
                                law concepts.Locate the chatbot at the bottom right of your screen!
                                </Box>
                            </AccordionPanel>
                            <Divider orientation='horizontal' />
                        </AccordionItem>

                        <Box mb="0.5rem" mt="0.5rem" borderColor="#284b63" borderBottomWidth="1px" maxW="50vw"></Box>

                        <AccordionItem>
                            <h2>
                                <AccordionButton _expanded={{ bg: '#abb8c3', color: 'white' }} 
                                fontFamily="serif" maxW="50vw">
                                    <Box as="span" flex='1' textAlign='left' maxW="50vw">
                                        I need help organising my court documents and important dates.
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel fontFamily="serif">
                                <Box maxW="50vw" overflowWrap="break-word"> 
                                That's understandable! It can be hard to keep track of all court-related matters.
                                We've got you covered! Head over to the "Court - Documents" page using the navbar. There,
                                you will see a wide range of tools at your disposal.
                                </Box>
                            </AccordionPanel>
                            <Divider orientation='horizontal' />
                        </AccordionItem>

                        <Box mb="0.5rem" mt="0.5rem" borderColor="#284b63" borderBottomWidth="1px" maxW="50vw"></Box>

                        <AccordionItem>
                            <h2>
                                <AccordionButton _expanded={{ bg: '#abb8c3', color: 'white' }} 
                                fontFamily="serif" maxW="50vw">
                                    <Box as="span" flex='1' textAlign='left' maxW="50vw" mb="0.5rem">
                                        I am worried I dont have enough money to file for court.
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel fontFamily="serif">
                                <Box maxW="50vw" overflowWrap="break-word" mb="0.5rem"> 
                                    We're sorry to hear that. We can help you break down court fees, and 
                                    budget for it. Click on "Court - Calculator" in the navigation bar
                                    at the top of the page to access our calculator.
                                </Box>
                            </AccordionPanel>
                            <Divider orientation='horizontal' />
                        </AccordionItem>
                    </Accordion>
                </Box>

            </Flex>
        </>

    )
}

export default HomePage;
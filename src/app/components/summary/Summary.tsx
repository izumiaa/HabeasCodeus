import {
    Box, Text, VStack, Flex, Input, InputGroup, InputLeftElement,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";

export interface Summaryprops {
    title: string,
    field: string,
    familial_relation: string,
    issue: string,
    reason: string,
    verdict: string
}

const Summary: React.FC<Summaryprops> = ({
    title, field, familial_relation, issue, reason, verdict
}) => {
    return (
        <Accordion allowToggle>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex="1" textAlign="left">
                            <Flex bg="#F5F5F5" w="50vw" padding="12px" flexDirection="column">

                                <Text fontSize="17px" fontWeight="550" fontFamily="Inter">
                                    {title}
                                </Text>

                                <Flex justifyContent="flex-end" alignContent="flex-start" >
                                    <AccordionIcon mt="-20px" />
                                </Flex>

                                <Flex>
                                    <Text fontSize="15px" fontWeight="500" fontFamily="Inter">
                                        Field:
                                    </Text>
                                    <Text fontSize="15px" fontWeight="400" fontFamily="serif" ml="3px">
                                        {field}
                                    </Text>
                                </Flex>
                                <Flex>
                                    <Text fontSize="15px" fontWeight="500" fontFamily="Inter">
                                        Familial Relation:
                                    </Text>
                                    <Text fontSize="15px" fontWeight="400" fontFamily="Inter" ml="3px">
                                        {familial_relation}
                                    </Text>
                                </Flex>
                                <Flex>
                                    <Text fontSize="15px" fontWeight="500" fontFamily="Inter">
                                        Issue:
                                    </Text>
                                    <Text fontSize="15px" fontWeight="400" fontFamily="Inter" ml="3px">
                                        {issue}
                                    </Text>
                                </Flex>
                                <Flex>
                                    <Text fontSize="15px" fontWeight="500" fontFamily="Inter">
                                        Reason:
                                    </Text>
                                    <Text fontSize="15px" fontWeight="400" fontFamily="Inter" ml="3px">
                                        {reason}
                                    </Text>
                                </Flex>
                                <Flex>
                                    <Text fontSize="15px" fontWeight="500" fontFamily="Inter">
                                        Verdict:
                                    </Text>
                                    <Text fontSize="15px" fontWeight="400" fontFamily="Inter" ml="3px">
                                        {verdict}
                                    </Text>
                                </Flex>
                            </Flex>

                        </Box>
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Box bg="#EDEDED" w="50vw" padding="12px" flexDirection="column">
                        <Flex flexDirection="column">
                            <Text fontSize="15px" fontWeight="550" fontFamily="Inter">
                                Facts:
                            </Text>
                            <Text fontSize="15px" fontWeight="400" fontFamily="serif" mt="5px">
                                Petitioner (Husband) and the Respondent (Wife) were lawfully married at the Registry of Marriage, Singapore on 18th August 1990, with 3 children. Sometime in 2000, both parties filed divorce petitions on the ground of 4 years separation.
                            </Text>
                        </Flex>

                        <Flex mt="10px" flexDirection="column">
                            <Text fontSize="15px" fontWeight="550" fontFamily="Inter">
                                Holding:
                            </Text>
                            <Text fontSize="15px" fontWeight="400" fontFamily="Inter" ml="3px" mt="5px">
                                [31]: Since the hearing of this appeal, there were some changes in circumstances:

                                1.	The Wife had resigned from her job and was unemployed;
                                2.	The Husband’s net income had increased from approximately $6,000 to $7,800 per month; and
                                3.	The expenses of the family had decreased from $8,516.39 to $6,672.39.

                                The court held that the Wife was “staging” her case for more maintenance.
                            </Text>
                            <Text fontSize="15px" fontWeight="400" fontFamily="Inter" ml="3px" mt="10px">
                                [32]: According to the Wife, she revealed that she was forced to resign from her job as she was not able to get along with her employer. Moreover, to show that she had tried to get gainful employment, she attempted to show she was actively involved in Conec2World(S) Pte Ltd as early as August 2001. However, this was to no avail as the court held that the Wife was an investor of the company instead.
                            </Text>
                            <Text fontSize="15px" fontWeight="400" fontFamily="Inter" ml="3px" mt="10px">
                                [33]: The court took into consideration that the expenses of the children did not increase and held that with the Husband’s income increase, the Husband was to pay an additional sum of $200, with the monthly maintenance for the children to be fixed at $2,500. He would also be responsible for the children’s medical expenses incurred at Ming’s Medical Centre and their hospitalisation costs.
                            </Text>
                            <Text fontSize="15px" fontWeight="400" fontFamily="Inter" ml="3px" mt="10px">
                                [34]: The court further held that the Husband was to pay the Wife a monthly sum of $300, having taken into consideration her potential earning capacity and the division of matrimonial assets.

                            </Text>
                        </Flex>

                    </Box>

                </AccordionPanel>
            </AccordionItem>
        </Accordion>

    )
}
// #F7FAFC
export default Summary;
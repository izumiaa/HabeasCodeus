'use client'

import { Box, Text, VStack, Flex } from "@chakra-ui/react";
import Link from "next/link";

const links = [
    {
        id: 1,
        title: "Home",
        url: "/home",
    },
    //add in contact and stuff under home
    {
        id: 2,
        title: "Search",
        url: "/search",
    },
    {
        id: 4,
        title: "Lawyers",
        url: "/lawyers",
    },
    {
        id: 2,
        title: "Court",
        url: "/about",
    },
    {
        id: 5,
        title: "Saved Chats",
        url: "/savedchats",
    },
    {
        id: 6,
        title: "Account",
        url: "/account",
    },
];

const Navbar = () => {

    return (
        //@ts-ignore
        <>
            <Flex flexDirection="row" bg="#D9D9D9" h="3rem" pr="50" gap="20" 
            justifyContent="flex-end" alignItems="center">
                {links.map((link) => (
                    <Link key={link.id} href={link.url}>
                        <Text fontWeight="500" fontSize="15px" 
                        fontFamily="Inter">{link.title}</Text>
                    </Link>
                ))}
            </Flex>
        </>
    );
};

export default Navbar;
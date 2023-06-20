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
        title: "About",
        url: "/about",
    },
    {
        id: 3,
        title: "Search",
        url: "/search",
    },
    {
        id: 4,
        title: "Lawyers",
        url: "/lawyers",
    },
    {
        id: 5,
        title: "Saved Chats",
        url: "/savedchats",
    },
    {
        id: 6,
        title: "User",
        url: "/user",
    },
];

const Navbar = () => {

    return (
        //@ts-ignore
        <>
            <Flex flexDirection="row" gap="20">
                {links.map((link) => (
                    <Link key={link.id} href={link.url}>
                        {link.title}
                    </Link>
                ))}
            </Flex>
        </>
    );
};

export default Navbar;
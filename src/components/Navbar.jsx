// import React from 'react'
import { Box, Flex, Text, Image, Link } from "@chakra-ui/react";
import { h4 } from "framer-motion/client";
import logo from "../assets/logo.png";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <Box>
                <Text as={h4} textAlign={"center"} p={3} bg={"#e7d2e5"} color={"#8c6888"} fontWeight={500} fontFamily="Outfit, sans-serif" fontSize={"sm"} letterSpacing={"1px"}>Find and Write Amazing Blog Women here</Text>
                <Box p={8} bg={"#fffcff"}>
                    <Flex justifyContent={"space-between"} alignItems={"center"}>
                        <Box>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Box>
                        <Box>
                            <Image src={logo} width={"85%"} alt="logo" pl={40} />
                        </Box>
                        <Box>
                            <Flex gap={5}>
                                <i className="fa-brands fa-square-instagram 2xl"></i>
                                <i className="fa-brands fa-tiktok"></i>
                                <i className="fa-brands fa-twitter"></i>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>

                {/* Menu Item */}
                <Box bg={"#d5bcdc"} color={"white"} p={2.50} fontFamily="Outfit, sans-serif" fontSize={"sm"} fontWeight={600} letterSpacing={"1px"}  >
                    <Flex justifyContent={"center"} gap={20}>
                        
                        <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>HOME</Link>
                        <Link as={RouterLink} to="/about" _hover={{ textDecoration: "none" }}>ABOUT</Link>
                        <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>ALL BLOG</Link>
                        <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>MY STORY</Link>

                    </Flex>
                </Box>
            </Box>
        </>
    )
}

export default Navbar
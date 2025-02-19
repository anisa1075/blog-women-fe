// import React from 'react'
import { Box, Button, SimpleGrid, Text, Image } from '@chakra-ui/react'
import Hero from "../assets/bg.jpg";
import Flower from "../assets/flower.png";
import { Link as RouterLink } from "react-router-dom"; // Import RouterLink dari react-router-dom

const Home = () => {
  const kategori = [
    {
      "bg": "https://i.pinimg.com/736x/e6/00/c5/e600c5da48df1dea2ad1606dbf533523.jpg",
      "kategori": "Growth",
    },
    {
      "bg": "https://i.pinimg.com/736x/05/6f/2f/056f2f033ba4a99bfd1930dc72a3b797.jpg",
      "kategori": "Beauty",
    },
    {
      "bg": "https://i.pinimg.com/736x/32/fa/71/32fa7154bc9b93de9283a82997489695.jpg",
      "kategori": "Healthy",
    },
    {
      "bg": "https://i.pinimg.com/736x/94/f5/4f/94f54f6703a79a7a61f594029cb5fb1f.jpg",
      "kategori": "Islamic",
    },

  ]

  return (
    <>
      <Box>
        <Box bgImage={Hero} w={"100%"} h={"100vh"} bgSize="cover"
          bgPosition="bottom" position="relative" sticky>
          {/* Overlay purple dengan RGBA agar hanya background yang transparan */}
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bg="rgba(140, 104, 136, 0.5)" // Ini menggantikan opacity
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            {/* Box untuk teks tetap solid */}
            <Box bg="rgba(255, 255, 255, 0.5)" p={8} borderRadius={6} boxShadow="md" textAlign={"center"} fontFamily="Outfit, sans-serif">
              <Text as="h4" color="#8c6888" fontSize="xl" fontWeight="bold">
                Welcome To Blog Women
              </Text>
              <Text fontSize="md" color="#8c6888" fontWeight={500}>
                Share your stories, inspirational tales and knowledge on the Blog Women
              </Text>
              <Button
                as={RouterLink}
                to="/createblog"
                bg="#8c6888"
                color="white"
                fontWeight="bold"
                px={4}
                py={2}
                mt={4} // Tambahkan margin atas agar ada jarak dari teks
                _hover={{ bg: "#754c70" }}
              >
                Create Blog
              </Button>
            </Box>
          </Box>
        </Box>

        {/* BLOG KATEGORI */}
        <Box>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={10} alignItems={"center"} textAlign={"center"} m={10}>
            {
              kategori.map((item, index) => (
                <Box as={RouterLink} key={index}
                  position="relative"
                  bgImage={`url(${item.bg})`} bgSize={"cover"} bgPosition={"center"} p={20}
                  _before={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bg: "rgba(97, 97, 97, 0.5)", // Overlay efek
                  }}
                >
                  <Box position="relative" color="white" textAlign="center" fontSize="2xl" fontWeight="bold" fontFamily="Outfit, sans-serif">
                    {item.kategori}
                  </Box>
                </Box>
              ))
            }


          </SimpleGrid>
        </Box>

        {/* whats new */}
        <Box position={"relative"} mt={20}>
          <Image position={"absolute"} top={-20} right={0} src={Flower} width={"25%"}/>
          <Text textAlign={"center"} py={8} bg={"#e7d2e5"} color={"#8c6888"} fontWeight={"bold"} fontFamily="Allura, sans-serif" fontSize={"4xl"} letterSpacing={"1px"}>See Whats New</Text>
          <Image position={"absolute"} top={10} src={Flower} width={"25%"} />
        </Box>
      </Box>

    </>
  )
}

export default Home

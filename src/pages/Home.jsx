// import React from 'react'
import { Box, Button, SimpleGrid, Text, Image, Flex, Avatar } from '@chakra-ui/react'
import Hero from "../assets/bg.jpg";
import Flower from "../assets/flower.png";
import { Link, Link as RouterLink } from "react-router-dom"; // Import RouterLink dari react-router-dom
import Hiasan1 from "../assets/hiasan1.png";
import Hiasan2 from "../assets/hiasan2.png";
import Envelop from "../assets/envelop.png";

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
    {
      "bg": "https://i.pinimg.com/736x/84/92/84/8492842738ee1e889d2159549d18de66.jpg",
      "kategori": "Cooking",
    },

  ]

  const BlogData = [
    {
      id: "1",
      thumbnail: "https://i.pinimg.com/736x/94/f5/4f/94f54f6703a79a7a61f594029cb5fb1f.jpg",
      kategori: "Islamic",
      title: "Blog 1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      avatar: "https://bit.ly/dan-abramov",
      author: "Anisa",
      date: "February 20, 2025"
    },
    {
      id: "2",
      thumbnail: "https://i.pinimg.com/736x/05/6f/2f/056f2f033ba4a99bfd1930dc72a3b797.jpg",
      kategori: "Cooking",
      title: "Blog 2",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      avatar: "https://bit.ly/dan-abramov",
      author: "Anisa",
      date: "February 20, 2025"
    },
    {
      id: "3",
      thumbnail: "https://i.pinimg.com/736x/15/f2/64/15f264cb7aa05de85e34df5dc67d75ff.jpg",
      kategori: "Growth",
      title: "Blog 3",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      avatar: "https://bit.ly/dan-abramov",
      author: "Anisa",
      date: "February 20, 2025"
    },
    {
      id: "4",
      thumbnail: "https://i.pinimg.com/736x/74/45/d3/7445d31f76a34283a7ddb7d50ca68aca.jpg",
      kategori: "Beauty",
      title: "Blog 4",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      avatar: "https://bit.ly/dan-abramov",
      author: "Anisa",
      date: "February 20, 2025"
    },
    {
      id: "5",
      thumbnail: "https://i.pinimg.com/736x/36/03/86/36038606215d9826f35b4154042339ab.jpg",
      kategori: "Healthy",
      title: "Blog 5",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      avatar: "https://bit.ly/dan-abramov",
      author: "Anisa",
      date: "February 20, 2025"
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
          <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} gap={10} alignItems={"center"} textAlign={"center"} m={10}>
            {
              kategori.map((item, index) => (
                <Box as={RouterLink} key={index}
                  position="relative"
                  bgImage={`url(${item.bg})`} bgSize={"cover"} bgPosition={"center"} px={10} py={24}
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
                  <Box position="relative" color="white" textAlign="center" fontSize="xl" fontWeight="bold" fontFamily="Outfit, sans-serif">
                    {item.kategori}
                  </Box>
                </Box>
              ))
            }


          </SimpleGrid>
        </Box>

        {/* WHATS NEW */}
        <Box position={"relative"} mt={20}>
          <Image position={"absolute"} top={-20} right={0} src={Flower} width={"25%"} />
          <Text textAlign={"center"} py={8} bg={"#e7d2e5"} color={"#8c6888"} fontWeight={"bold"} fontFamily="Allura, sans-serif" fontSize={"4xl"} letterSpacing={"1px"}>See Whats New</Text>
          <Image position={"absolute"} top={10} src={Flower} width={"25%"} />
        </Box>



        {/* ALL BLOG */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={10} px={10} pt={20}>
          {
            BlogData.slice(0, 4).map((blog, index) => (
              <Box as={RouterLink} to={`/blog/${blog.id}`} position={"relative"} py={10} key={index}>
                <Box>
                  <Image width={"100%"} height={"300px"} objectFit={"cover"} objectPosition={"center"} src={blog.thumbnail} />
                  <Box bg={"#8c6888"} position="absolute" top={10} m={3} px={2} py={1} >
                    <Text color={"white"} fontSize="sm" fontFamily="Outfit, sans-serif">{blog.kategori}</Text>
                  </Box>
                </Box>

                <Box width={"100%"} pt={4} bg={"white"} fontFamily="Outfit, sans-serif">

                  <Text fontWeight={"bold"} fontSize={"xl"} _hover={{ textDecoration: "underline" }} >{blog.title}</Text>

                  <Text fontSize={"sm"} fontWeight={600}>{blog.date}</Text>

                  <Text fontSize={"sm"} mt={2}>{blog.desc.split("").length > 100 ? blog.desc.split("").slice(0, 100).join("") + "..." : blog.desc}</Text>

                  <Flex mt={2} alignItems={"center"} gap={2}>
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size={"sm"} />
                    <Text fontSize={"sm"} fontWeight={"bold"}>{blog.author}</Text>
                  </Flex>

                </Box>
              </Box>
            ))
          }
        </SimpleGrid>

        <Flex justify="center" align="center">
          <Button textAlign={"center"} justifyItems={"center"}
            as={RouterLink}
            to="/createblog"
            bg="#8c6888"
            color="white"
            fontFamily="Outfit, sans-serif"
            fontWeight="bold"
            my={4}
            px={4}
            py={2}
            _hover={{ bg: "#754c70" }}
          >
            View All Blog
          </Button>
        </Flex>



        {/* Suggestion */}
        <Box bg={"#e7d2e5"} py={14} mt={10}>
          <Flex justifyContent={"space-between"}>
            <Image src={Hiasan1} width={"25%"} height={"25%"} px={10} />
            <Box justifyItems={"center"}>
              <Text fontFamily="Allura, sans-serif" fontSize={"5xl"} fontWeight={500} color={"#8c6888"}>"Suggestions about this website"</Text>
              <Image src={Envelop} width={"20%"} height={"45%"} />
              <Text mt={4} color={"white"} fontFamily="Outfit, sans-serif" fontWeight={600} fontSize={"md"}>Provide feedback and suggestions via email below. Thanks visit this website</Text>
              <Link as={RouterLink} to="https://www.google.com/" target="_blank" textDecoration={"none"} _hover={{ textDecoration: "none" }} >https://www.google.com/</Link>
              <Flex as={RouterLink} to="mailto:anisa.nisa1075@gmail.com" borderRadius={"sm"} mt={6} fontWeight={600} fontFamily="Outfit, sans-serif" justifyContent={"space-between"} alignItems={"center"} bg={"white"} w={"40%"} color={"#8c6888"} py={1} px={3} >
                <Text>Email</Text>
                <i className="fa-solid fa-arrow-right"></i>
              </Flex>
            </Box>

            <Image src={Hiasan2} width={"25%"} height={"25%"} />
          </Flex>

        </Box>


      </Box>

    </>
  )
}

export default Home

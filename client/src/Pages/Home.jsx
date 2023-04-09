// import { Box } from '@chakra-ui/react'
// import React from 'react'
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import UserForm from "../Components/UserForm";
import PostForm from "../Components/PostForm";
import UserList from "../Components/UserList";
import PostList from "../Components/PostList";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
  return (
    <Box>
        <Flex
        margin={"auto"}
        w="90%"
        gap="10px"
        mt="10px"
        justifyContent={"space-between"}
      >
        <Box>
          <Text
            color="green.400"
            fontSize={"2xl"}
            fontWeight={"500"}
            fontFamily={"fantasy"}
          >
            Social || Talk
          </Text>
        </Box>
        <Flex gap="10px" justifyContent={"right"}>
          <UserForm/>
          <PostForm />
          <Button bg={"#d0d6db"} _hover={{ bg: "#69ebb3" }} onClick={()=>navigate("/users_analytics")}>
            Analytics Users
          </Button>
          <Button bg={"#d0d6db"} _hover={{ bg: "#69ebb3" }} onClick={()=>navigate("/posts_analytics")}>
            Analytics Posts
          </Button>
        </Flex>
      </Flex>

      <Flex mt="10px" w="100vw" boxSizing="border-box" pl="2rem" pr="2rem">
        <PostList />
        <UserList />
      </Flex>
      
    </Box>
  )
}

export default Home

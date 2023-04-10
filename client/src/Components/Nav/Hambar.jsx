import { Box, IconButton, Button, Text, Flex} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "../UserForm";
import PostForm from "../PostForm";

const Hambar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  // console.log(data)
  return (
    <Box w="90%" m="auto" mt="20px" backgroundColor={"white"}>
      <Box display={"flex"} justifyContent="space-between">
          <Text
            color="green.400"
            fontSize={"2xl"}
            fontWeight={"500"}
            fontFamily={"fantasy"}
          >
            Social || Talk
          </Text>
        
        <Button
          as={IconButton}
          aria-label="Options"
          icon={show ? <RxCross1 /> : <RxHamburgerMenu />}
          variant="outline"
          onClick={() => {
            setShow(!show);
          }}
        />
      </Box>
      {show ? (
        <Flex gap="10px" justifyContent={"right"}>
         <UserForm />
          <PostForm />
          <Button
            bg={"#d0d6db"}
            _hover={{ bg: "#69ebb3" }}
            onClick={() => navigate("/users_analytics")}
            fontSize={["8px","12px","15px","20px"]}
          >
            Analytics Users
          </Button>
          <Button
           fontSize={["8px","12px","15px","20px"]}
            bg={"#d0d6db"}
            _hover={{ bg: "#69ebb3" }}
            onClick={() => navigate("/posts_analytics")}
          >
            Analytics Posts
          </Button>
        </Flex>
      ) : (
        ""
      )}
    </Box>
  );
};

export default Hambar;

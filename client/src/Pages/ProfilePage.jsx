import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetSingleUser } from "../Redux/App/AppAction";
import PostForm from "../Components/PostForm";
import UserForm from "../Components/UserForm";

const ProfilePage = () => {
  const { id } = useParams();
  const { currentUser } = useSelector((store) => store.AppReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetSingleUser(id));
  }, []);

  return (
    <Box>
      <Box
        p="1rem"
        m="auto"
        mt="30px"
        w={["60%", "40%","35%","32%"]}
        border={"1px solid"}
        shadow={"outline"}
        borderRadius={"10px"}
      >
        <Flex justifyContent={"space-between"}>
          <Text _hover={{ color: "teal.500" }}>
            <PostForm />
          </Text>
          <Text _hover={{ color: "teal.500" }}>
            <UserForm data={currentUser} />
          </Text>
        </Flex>
        <Flex m="auto" justifyContent={"center"} w="100%">
          <Image
            w="30%"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          />
        </Flex>
        <Box mt="10px">
          <Text as="b">{currentUser.name}</Text>
          <Text fontFamily={"italic"}>{currentUser.bio}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;

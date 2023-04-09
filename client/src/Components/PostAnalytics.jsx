import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllPost, GetTopPost } from "../Redux/App/AppAction";
import SinglePost from "../Pages/SinglePost";

const PostAnalytics = () => {
  const { topPosts,posts } = useSelector((store) => store.AppReducer);
  // console.log(topPosts)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetTopPost());
    dispatch(GetAllPost());
  }, []);
  return (
    <Box boxSizing="border-box" p="1rem">
        <Text fontSize={"3xl"} textAlign={"center"} fontWeight={"500"}> Top 5 Most Liked Posts.</Text>
      <Box w="60%" m="auto">
        <Text textAlign={"right"} fontSize={"xl"}>Total Posts: <b>{posts.length}</b></Text>
        {topPosts.map((ele, i) => (
          <SinglePost key={i} data={ele} />
        ))}
      </Box>
    </Box>
  );
};

export default PostAnalytics;

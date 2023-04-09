import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import {BiLike} from "react-icons/bi"
import {BiDislike} from "react-icons/bi"
import {FaEye} from "react-icons/fa"
import {RiDeleteBin5Line} from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux";
import { DeletePost, LikePost, UnLikePost } from "../Redux/App/AppAction";
import PostForm from "../Components/PostForm";

const SinglePost = ({ data }) => {

  const dispatch = useDispatch()
  const {users} = useSelector((store)=>store.AppReducer)
  const handleDelete=(id)=>{
    // console.log(id)
    dispatch(DeletePost(id))

  }
  const handleUnLike=(data)=>{
    if(data.likes>0){
      dispatch(UnLikePost(data))
    }
    else{
      alert("Likes can not be less then 0")
    }
  }

  // console.log(data)
  return (
    <Box p="1rem" mt="7px" boxShadow="outline"  rounded="md" bg="white">
      <Box
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        bg="white"
        fontStyle={"italic"}
      >
        {data.content}
      </Box>
      <Flex mt="10px" justifyContent={"space-evenly"}>
        <Flex gap="10px">
        <Text _hover={{color: "teal.500",}} mt="10px" onClick={()=>dispatch(LikePost(data))} ><BiLike size={"22px"}/></Text>
        <Text mt="10px">{data.likes}</Text>
        <Text _hover={{color: "teal.500",}} mt="10px" onClick={()=>{handleUnLike(data)}}><BiDislike size={"22px"}/></Text>
        </Flex>

        <Box _hover={{color: "teal.500",}} mt="10px"><Flex gap="10px"><FaEye size={"22px"}/>{`${users.length}`}</Flex></Box>
        <Text _hover={{color: "teal.500",}} mt="10px" onClick={()=>handleDelete(data._id)}><RiDeleteBin5Line size={"22px"}/></Text>
        <Text _hover={{color: "teal.500",}}><PostForm data={data}/></Text>
      </Flex>
    </Box>
  );
};

export default SinglePost;

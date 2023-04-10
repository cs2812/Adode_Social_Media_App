import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {FaEye} from "react-icons/fa"
import {RiDeleteBin5Line} from "react-icons/ri"
import { useDispatch, useSelector } from 'react-redux'
import UserForm from '../Components/UserForm'
import { DeleteUser, GetAllUser } from '../Redux/App/AppAction'
import { useNavigate } from 'react-router-dom'

const SingleUser = ({data}) => {
    // console.log(data)
  const navigate = useNavigate()
  const {users} = useSelector((store)=>store.AppReducer)
  const dispatch = useDispatch()
  const handleNavigate=()=>{
    navigate(`/user/${data._id}`)
  }

  useEffect(()=>{
    dispatch(GetAllUser())
  },[])
  return (
    <Flex boxShadow='outline' mt="7px" p='0.5rem' rounded='md' bg='white' gap="30px" justifyContent={"space-between"}>
      <Flex gap="20px">
      <Box w={["20vw","10vw","6vw"]}>
        <Image w="100%" b="100%" alt='avatar' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"/>
      </Box>
        <Box textAlign={"left"}>
            <Text onClick={handleNavigate} cursor={"pointer"} fontWeight={"500"}>{data.name}</Text>
            <Text fontStyle={"italic"}>{data.bio}</Text>
        </Box>
      </Flex>
      <Box>
      <Box ml={"15px"} _hover={{color: "teal.500",}} mt="10px"><Flex gap="10px"><FaEye size={"22px"}/>{`${users.length-1}`}</Flex></Box>
        <Text ml={"15px"} _hover={{color: "teal.500",}} mt="5px" onClick={()=>dispatch(DeleteUser(data._id))} ><RiDeleteBin5Line size={"20px"}/></Text>
        <Text _hover={{color: "teal.500",}} mt="5px"><UserForm data={data}/></Text>
      </Box>
    </Flex>
  )
}

export default SingleUser

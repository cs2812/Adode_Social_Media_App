import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllPost } from '../Redux/App/AppAction'
import SinglePost from '../Pages/SinglePost'

const PostList = () => {
    const {posts} = useSelector((store)=>store.AppReducer)
    // console.log("userPost",posts)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(GetAllPost())
    },[])
  return (
    <Box overflow={"scroll"} h="90vh" w="50vw"  
    // border={"1px solid blue"}
     boxSizing='border-box' p="1rem">
{posts.map((ele,i)=><SinglePost key={i} data={ele}/>)}
      
    </Box>
  )
}

export default PostList

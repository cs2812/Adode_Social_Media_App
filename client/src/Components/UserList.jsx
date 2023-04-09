import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUser } from "../Redux/App/AppAction";
import SingleUser from "../Pages/SingleUser";

const UserList = () => {
  // const arr = [1, 2, 3, 4, 5];
  const { users } = useSelector((store) => store.AppReducer);
  // console.log(users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllUser());
  }, []);
  return (
    <Box overflow={"scroll"} h="90vh" w="50vw" 
    // border={"1px solid"} 
    p="1rem">
      {users && users.map((ele, i) => (
        <SingleUser key={i} data={ele} />
      ))}
    </Box>
  );
};

export default UserList;

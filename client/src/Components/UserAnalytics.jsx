import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { GetAllUser, GetTopUser } from "../Redux/App/AppAction";

const UserAnalytics = () => {
  const { topUsers, users } = useSelector((store) => store.AppReducer);
  const dispatch = useDispatch();
  // console.log(topUsers )

  useEffect(() => {
    dispatch(GetTopUser());
    dispatch(GetAllUser());
  }, []);

  return (
    <Box p={"3rem"} boxSizing="border-box">
      <Text fontSize={"3xl"} textAlign={"center"} fontWeight={"500"}>
        Top 5 Active User
      </Text>

      <TableContainer mt="10px" w="60%" m="auto">
        <Text textAlign={"right"}>
          Total Users: <b>{users.length}</b>
        </Text>
        <Table size="sm">
          <Thead bg="#f7c065">
            <Tr>
              <Th>Position</Th>
              <Th>User Name</Th>
              <Th>User Email</Th>
              <Th isNumeric>User Post</Th>
            </Tr>
          </Thead>
          <Tbody bg="#bdf765">
            {topUsers.map((ele, i) => {
              return (
                <Tr>
                  <Td>{i + 1}</Td>
                  <Td>{ele.name}</Td>
                  <Td>{ele.email}</Td>
                  <Td isNumeric>{ele.numPosts}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserAnalytics;

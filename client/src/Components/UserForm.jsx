import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { CreateUser, UpdateUser } from "../Redux/App/AppAction";

const UserForm = ({ data }) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [form, setForm] = useState({
    name: data?.name? data.name : "",
    email: "",
    bio: data?.bio? data.bio : "",
  });
  // console.log(form)

  const handleSubmit = () => {
    if (data?.name) {
      dispatch(UpdateUser({name:form.name,bio:form.bio,_id:data._id}));
      // console.log({name:form.name,bio:form.bio,_id:data._id})
    } else {
      dispatch(CreateUser(form));
    }
    setForm({
      name:  "",
    email: "",
    bio: "",
    })
  };

  return (
    <>
      <Button
        bg={data ? "none" : "#d0d6db"}
        _hover={data ? { bg: "none" } : { bg: "#69ebb3" }}
        onClick={onOpen}
      >
        {data ? <FiEdit size={"20px"} /> : "Register user"}
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{data ? "Update user" : "Register user"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                value={form.name}
                placeholder="name"
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                }}
              />
            </FormControl>

            <FormControl display={data ? "none" : ""} mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="email"
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Bio</FormLabel>
              <Textarea
                value={form.bio}
                placeholder="Enter details about user"
                onChange={(e) => {
                  setForm({ ...form, bio: e.target.value });
                }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserForm;

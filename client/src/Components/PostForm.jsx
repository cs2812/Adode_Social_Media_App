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
  Textarea,
} from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { CreatePost, UpdatePost } from "../Redux/App/AppAction";
const PostForm = ({ data }) => {
  // console.log("data",data)
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [form, setForm] = useState({
    user_id: data?.user_id ? data.user_id : "6431cc72dff8f7c0dcae59bd",
    content: data?.conten ? data.content : "",
  });
  // console.log("form",form)

  const handleSubmit = () => {
    if (data?.content) {
      dispatch(UpdatePost({ ...form, _id: data._id }));
    } else {
      dispatch(CreatePost(form));
    }
    // console.log(form);
  };

  return (
    <>
      <Button
        bg={data ? "none" : "#d0d6db"}
        _hover={data ? { bg: "none" } : { bg: "#69ebb3" }}
        onClick={onOpen}
      >
        {data ? <FiEdit size={"22px"} /> : "Add Post"}
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{data?"Update Post":"Add Post"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Content</FormLabel>
              <Textarea
                placeholder="Enter details about user"
                value={form.content}
                onChange={(e) => {
                  setForm({ ...form, content: e.target.value });
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

export default PostForm;

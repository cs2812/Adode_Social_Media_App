import axios from "axios";
import {
  INC_LIKE,
  DEC_LIKE,
  CREATE_POST_SUCCESS,
  CREATE_USER_SUCCESS,
  DELETE_POST_SUCCESS,
  DELETE_USER_SUCCESS,
  GET_POSTS_SUCCESS,
  GET_SINGLE_POST_SUCCESS,
  GET_SINGLE_USER_SUCCESS,
  GET_TOP_POSTS_SUCCESS,
  GET_TOP_USERS_SUCCESS,
  GET_USERS_SUCCESS,
  UPDATE_POST_SUCCESS,
  UPDATE_USER_SUCCESS,
} from "./AppType";
const url = "https://adobe-server-w5qn.onrender.com"
const basePost = `${url}/posts`;
const baseUser = `${url}/users`;
const baseAnalytics = `${url}/analytics`;

// User Actions Hendlers

export const CreateUser = (form) => (dispatch) => {
  axios
    .post(baseUser, form)
    .then((res) => {
      dispatch({ type: CREATE_USER_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      alert("Create user Failed");
      console.log("error", error);
    });
};

export const GetSingleUser = (id) => (dispatch) => {
  // console.log(id)
  axios
    .get(`${baseUser}/${id}`)
    .then((res) => {
      dispatch({ type: GET_SINGLE_USER_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      alert("Get Single user Failed");
      console.log("error", error);
    });
};

export const UpdateUser = (form) => (dispatch) => {
  // console.log("action Update",form)
  axios
    .put(`${baseUser}/${form._id}`,form)
    .then((res) => {
      // console.log("res",res.data)
      dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
      alert("User Updated Successfully");
    })
    .catch((error) => {
      alert("Update user Failed");
      console.log("error", error);
    });
};

export const DeleteUser = (id) => (dispatch) => {
  axios
    .delete(`${baseUser}/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_USER_SUCCESS, payload: res.data });
      alert("User Deleted Successfully");
    })
    .catch((error) => {
      alert("Delete user Failed");
      console.log("error", error);
    });
};

export const GetTopUser = () => (dispatch) => {
  axios
    .get(`${baseAnalytics}/users/top-active`)
    .then((res) => {
      dispatch({ type: GET_TOP_USERS_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      alert("Get Top users Failed");
      console.log("error", error);
    });
};

export const GetAllUser = () => (dispatch) => {
  axios
    .get(`${baseAnalytics}/users`)
    .then((res) => {
      dispatch({ type: GET_USERS_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      alert("Get users Failed");
      console.log("error", error);
    });
};

// Post Actions Hendlers

export const GetAllPost = () => (dispatch) => {
  axios
    .get(`${baseAnalytics}/posts`)
    .then((res) => {
      dispatch({ type: GET_POSTS_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      alert("Get POSTS Failed");
      console.log("error", error);
    });
};

export const GetTopPost = () => (dispatch) => {
  axios
    .get(`${baseAnalytics}/posts/top-liked`)
    .then((res) => {
      dispatch({ type: GET_TOP_POSTS_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      alert("Get Top POSTS Failed");
      console.log("error", error);
    });
};

export const GetSinglePost = (id) => (dispatch) => {
  axios
    .get(`${basePost}/${id}`)
    .then((res) => {
      dispatch({ type: GET_SINGLE_POST_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      alert("Get POSTS Failed");
      console.log("error", error);
    });
};

export const UpdatePost = (form) => (dispatch) => {
  axios
    .put(`${basePost}/${form._id}`,form)
    .then((res) => {
      dispatch({ type: UPDATE_POST_SUCCESS, payload: res.data });
      alert("Post Updated Successfully");
    })
    .catch((error) => {
      alert("Update POSTS Failed");
      console.log("error", error);
    });
};

export const DeletePost = (id) => (dispatch) => {
  axios
    .delete(`${basePost}/${id}`)
    .then((res) => {
      // console.log("deleteRes",res.data)
      dispatch({ type: DELETE_POST_SUCCESS, payload: res.data });
      alert("Post Deleted Successfully");
    })
    .catch((error) => {
      alert("delete POST Failed");
      console.log("error", error);
    });
};

export const CreatePost = (form) => (dispatch) => {
  axios
    .post(`${basePost}`, form)
    .then((res) => {
      dispatch({ type: CREATE_POST_SUCCESS, payload: res.data });
      alert("Post Created Successfully");
    })
    .catch((error) => {
      alert("Create POST Failed");
      console.log("error", error);
    });
};

export const LikePost = (form) => (dispatch) => {
  axios
    .post(`${basePost}/${form._id}/like`, form)
    .then((res) => {
      dispatch({ type: INC_LIKE, payload: res.data });
    })
    .catch((error) => {
      alert("Like your Post Again");
      console.log("error", error);
    });
};

export const UnLikePost = (form) => (dispatch) => {
  axios
    .post(`${basePost}/${form._id}/unlike`, form)
    .then((res) => {
      dispatch({ type: DEC_LIKE, payload: res.data });
    })
    .catch((error) => {
      alert("Unlike your Post Again");
      console.log("error", error);
    });
};

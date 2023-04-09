import {
  CREATE_USER_SUCCESS,
  GET_USERS_SUCCESS,
  DELETE_USER_SUCCESS,
  GET_SINGLE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  GET_TOP_USERS_SUCCESS,
  CREATE_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  GET_SINGLE_POST_SUCCESS,
  GET_POSTS_SUCCESS,
  UPDATE_POST_SUCCESS,
  GET_TOP_POSTS_SUCCESS,
  INC_LIKE,
  DEC_LIKE,
} from "./AppType";

const initialState = {
  posts: [],
  users: [],
  topUsers: [],
  topPosts: [],
  singlePost: {},
  currentUser: {},
};

const AppReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        users: payload,
      };
    }
    case CREATE_USER_SUCCESS: {
      state.users.unshift(payload);
      // console.log("create",newArr)
      return {
        ...state,
      };
    }
    case GET_SINGLE_USER_SUCCESS: {
      return {
        ...state,
        singlePost: payload,
      };
    }
    case UPDATE_USER_SUCCESS: {
      let newArr = state.users.map((ele) =>
        ele._id === payload._id ? payload : ele
      );
      return {
        ...state,
        users: newArr,
      };
    }
    case DELETE_USER_SUCCESS: {
      let newArr = state.users.filter((ele) => ele._id !== payload._id);
      return {
        ...state,
        users: newArr,
      };
    }
    case GET_TOP_USERS_SUCCESS: {
      return {
        ...state,
        topUsers: payload,
      };
    }
    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        posts: payload,
      };
    }
    case CREATE_POST_SUCCESS: {
       state.posts.unshift(payload);
      return {
        ...state,
      };
    }

    case DELETE_POST_SUCCESS: {
      let newArr = state.posts.filter((ele) => ele._id !== payload._id);
      console.log("deletePost",newArr)
      return {
        ...state,
        posts: newArr,
      };
    }
    case UPDATE_POST_SUCCESS: {
      let newArr = state.posts.map((ele) =>
        ele._id === payload._id ? payload : ele
      );
      return {
        ...state,
        posts: newArr,
      };
    }
    case INC_LIKE: {
      let newArr = state.posts.map((ele) =>
        ele._id === payload._id ? payload : ele
      );
      return {
        ...state,
        posts: newArr,
      };
    }
    case DEC_LIKE: {
      let newArr = state.posts.map((ele) =>
        ele._id === payload._id ? payload : ele
      );
      return {
        ...state,
        posts: newArr,
      };
    }
    case GET_TOP_POSTS_SUCCESS: {
        return {
          ...state,
          topPosts: payload,
        };
      }
      case GET_SINGLE_POST_SUCCESS: {
        return {
          ...state,
          singlePost: payload,
        };
      }

    default: {
      return state;
    }
  }
};

export default AppReducer;
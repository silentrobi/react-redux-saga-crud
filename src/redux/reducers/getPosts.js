import * as actionType from "../actions/actionTypes";

const initialState = {
  posts: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionType.GOT_POSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
}

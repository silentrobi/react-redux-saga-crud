import { combineReducers } from "redux";

import addPost from "./addPost";
import getPosts from "./getPosts";
import updatePost from "./updatePost";
import deletePost from "./deletePost";

export default combineReducers({
    addPost,
    getPosts,
    updatePost,
    deletePost
});

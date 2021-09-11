import { all, put, call, takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import postsblogPostApi from "../../server/api";

export default function* addPostSaga() {
    yield takeEvery(actionType.DELETE_POST, deletePost);
}

function* deletePost(action) {
    console.log(action)
    try {
        const postResponse = yield call(postsblogPostApi.delete, action.payload);
        yield put({ type: actionType.DELETED_POST, payload: postResponse });
    } catch (err) {
        console.log(err);
    }
}
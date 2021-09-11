import { all, put, call, takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import postsblogPostApi from "../../server/api";

export default function* updatePostSaga() {
    yield takeEvery(actionType.UPDATE_POST, updatePost);
}

function* updatePost(action) {
    console.log(action)
    try {
        const postResponse = yield call(postsblogPostApi.update, action.payload);
        yield put({ type: actionType.UPDATED_POST, payload: postResponse });
    } catch (err) {
        console.log(err);
    }
}
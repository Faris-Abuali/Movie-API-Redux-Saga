import { all } from "redux-saga/effects";
// import { moviesSagas } from "./movieSagas";
import moviesSagas from "./movieSagas";

function* rootSaga() {
    yield all([...moviesSagas]);
};

export default rootSaga;
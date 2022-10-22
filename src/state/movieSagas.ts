import { takeLatest, put, call, fork } from 'redux-saga/effects';
import { fetchMovie, fetchMovies } from './api';
import { getMovie, getMoviesWithName, setMovie, setMovies } from './feature/movie/movieSlice';

function* onLoadMoviesAsync(action: { type: string, payload: string }): any {
    try {
        const movieName = action.payload;
        const response = yield call(fetchMovies, movieName);
        if (response.status === 200) {
            yield put(setMovies(response.data));
        }
    }
    catch (error) {
        console.log(error);
    }
}

function* onLoadMovieAsync(action: { type: string, payload: string }): any {
    try {
        const movieId = action.payload;
        const response = yield call(fetchMovie, movieId);
        if (response.status === 200) {
            console.log(response.data);
            yield put(setMovie(response.data));
        }
    }
    catch (error) {
        console.log(error);
    }
}

function* onLoadMovies() {
    yield takeLatest(getMoviesWithName.type, onLoadMoviesAsync);
}

function* onLoadMovie() {
    yield takeLatest(getMovie.type, onLoadMovieAsync);
}

// export default onLoadMovies;
const moviesSagas = [fork(onLoadMovies), fork(onLoadMovie)];
/**
 * fork is simply used to call a function.
 * call is used to call a function and wait for it to return.
 */

export default moviesSagas;
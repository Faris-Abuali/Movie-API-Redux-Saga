import React, { useState, useEffect } from 'react'
import { TextField } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import useStyles from "../styles";
import { getMoviesWithName, setMovies } from '../state/feature/movie/movieSlice';
import { RootState } from '../state/store';


type SearchProps = {}

const Search: React.FC<SearchProps> = (props) => {
    const [name, setName] = useState<string>('spider');
    const classes = useStyles();
    const dispatch = useDispatch();
    const { moviesList } = useSelector((state: RootState) => state.movie);

    useEffect(() => {
        dispatch(getMoviesWithName(name));
    }, [name]);

    return (
        <>
            <h2 className={classes.title}>Movie Search App</h2>
            <form
                className={classes.form}
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <TextField
                    sx={{ m: 1, width: '55ch' }}
                    type="text"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </form>
        </>
    )
}

export default Search
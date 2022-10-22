import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../state/store';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useStyles from '../styles';
import { getMovie } from '../state/feature/movie/movieSlice';
import { Box, Grid } from '@mui/material';


type MovieProps = {}

const Movie: React.FC<MovieProps> = (props) => {
    const dispatch = useDispatch();
    const movie = useSelector((state: RootState) => state.movie.movie);
    const classes = useStyles();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(getMovie(id));
        }
    }, [id]);

    return (
        <>
            <Grid container flexDirection={"row"} flexWrap="nowrap" sx={{
                gap: 8
            }}>
                <Grid item sx={{
                    xs: 12,
                    sm: 12,
                    md: 4,
                    lg: 3,
                }}>
                    <img
                        src={movie?.Poster}
                        alt={movie?.Title}
                    />
                </Grid>
                <Grid item sx={{
                    xs: 12,
                    sm: 12,
                    md: 4,
                    lg: 3,
                }}>
                    <Typography align="left" variant="h3" component="h2" gutterBottom>
                        {movie?.Title}
                    </Typography>
                    <Typography align="left" variant="h5" component="h5" gutterBottom>
                        Year: {movie?.Year}
                    </Typography>
                    <Typography align="left" variant="body1" component="p" gutterBottom>
                        {movie?.Plot}
                    </Typography>
                    <Typography align="left" variant="h6" component="h6" gutterBottom>
                        Director: {movie?.Director}
                    </Typography>
                </Grid>
            </Grid>
            <Box>
                <Button variant="contained" onClick={() => navigate("/")}>
                    Back
                </Button>
            </Box>
        </>
    )
}

export default Movie
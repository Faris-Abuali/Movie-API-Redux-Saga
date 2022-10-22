import React from 'react'
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { MapStateToProps, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Movie } from '../state/feature/movie/movieTypes';

type MoviesListProps = {}

const MoviesList: React.FC<
    MoviesListProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
> = ({ searchResult }) => {
    const moviesList: Movie[] = searchResult?.Search || [];

    return (
        <Grid container sx={{ flexGrow: 1 }}>
            <Grid item xs={12}>
                <Typography variant='h5' component="p" gutterBottom>
                    {searchResult?.totalResults} results found
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={3}>
                    {
                        moviesList?.map((item: any, index) => (
                            <Grid key={index} item>
                                <Link to={`/movie/${item.imdbID}`}>
                                    <Card sx={
                                        {
                                            maxWidth: { xs: "100%", sm: 200, md: 250, xl: 300 },
                                            maxHeight: { xs: "100%", sm: 600 },
                                        }}>
                                        <CardMedia
                                            component="img"
                                            // height="240"
                                            image={item.Poster}
                                            alt={item.Title}
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="h5"
                                                sx={{
                                                    width: '100%',
                                                    whiteSpace: 'nowrap',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                }}
                                                title={item.Title}
                                            >
                                                {item.Title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.Year}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        searchResult: state.movie.searchResult
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
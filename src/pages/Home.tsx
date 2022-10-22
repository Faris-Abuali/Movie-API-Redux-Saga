import React from 'react'
import MoviesList from '../components/MoviesList'
import Search from '../components/Search'

type HomeProps = {}

const Home: React.FC<HomeProps> = (props) => {
    return (
        <>
            <Search />
            <MoviesList />
        </>
    )
}

export default Home
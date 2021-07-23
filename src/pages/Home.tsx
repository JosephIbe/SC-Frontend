import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

import styled from "styled-components";
import LoaderSpinner from "../components/LoaderSpinner";
import MovieItem from "../components/MovieItem";
import { IShows } from "../interfaces/Ishows";
import ShowsService from "../services/ShowsService";

const HomeContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    color: var(--gray-1);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 2rem;
    grid-gap: 2.5rem;

    a {
        color: var(--gray-1);
    }

    .loader {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

`;

const Home = () => {

    const [shows, setShows] = useState<IShows[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchAllShows = async () => {
        let response:any = await ShowsService.getAllShows();
        if(response != null || response.length > 0) {
            setShows(response.data);
            setLoading(false);
        }
    }

    useEffect(()=> {
        setLoading(true);
        fetchAllShows()
    }, [])


    return <HomeContainer>
        {
            shows.length == 0 
                ? <div className="loader">
                        <LoaderSpinner 
                            isLoading={loading} 
                            loadingText="Fetching Movies..."
                        />
                    </div>
                : shows.map((show, index) => {
                    return <Link 
                                to={{pathname:`/movies/${show.id}`, 
                                state: {movie: show}}} key={index}
                            >
                        <MovieItem show={show} />
                    </Link> 
                })
        }
    </HomeContainer>
}

export default Home;
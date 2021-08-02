import { useState, useEffect, useRef } from "react";
import {Link} from 'react-router-dom';

import styled from "styled-components";

import {GoSearch} from 'react-icons/go';

import LoaderSpinner from "../components/LoaderSpinner";
import MovieItem from "../components/MovieItem";

import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {fetchAllShows} from '../actions/movies';
import {searchMovieByTitle} from '../actions/search';
import ShowsService from "../services/ShowsService";

const HomeContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    color: var(--gray-1);
    display: flex;
    flex-direction: column;
    padding: 0 8rem;

    .search-bar {
        width: 100%;
        min-height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .5rem;
        margin-top: 14rem;

        input {
            padding: 1.5rem;
            width: 100%;
            border: 1px solid var(--primary);
            outline: none;
            border-radius: 10px;
            color: var(--dark-bg);
            font-size: 2rem;
        }

        .search {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            min-height: 50px;
            border-radius: 50%;
            background-color: #767779;

            svg {
                width: 19px;
                height: 19px;
            }
    
            &:hover {
                cursor: pointer;
            }
        }
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 2.5rem;
        margin-top: 4rem;
        padding: 5px;
    }

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

    @media only screen and (max-width: 768px) {
        min-height: 100vh;
        width: 100%;
        color: var(--gray-1);
        display: flex;
        flex-direction: column;
        padding: 2rem;

        .search-bar {
            min-width: 100%;
            min-height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: .5rem;
            margin-top: 10rem;

            input {
                padding: 1.5rem;
                min-width: 90%;
                border: 1px solid var(--primary);
                outline: none;
                border-radius: 10px;
                color: var(--dark-bg);
                font-size: 2rem;
            }

            .search {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50px;
                min-height: 50px;
                border-radius: 50%;
                background-color: #767779;

                svg {
                        width: 19px;
                        height: 19px;
                }
            
                &:hover {
                        cursor: pointer;
                }
            }
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 1.5rem;
            margin-top: 4rem;
        }
    }

`;

const Home = () => {

    const [loading, setLoading] = useState(true);
    const [searchString, setSearchString] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isFromSearchResults, setIsFromSearchResults] = useState(false);

    const dispatch = useDispatch();
    const movies = useSelector((state: RootStateOrAny) => state.shows)
    // const searchResults = useSelector((state: RootStateOrAny) => state.search);

    useEffect(()=> {
        setLoading(true);
        dispatch(fetchAllShows());
        setIsFromSearchResults(false);
    }, [dispatch])

    const handleSearchChange = (e: any) => {
        e.preventDefault();
        setSearchString(e.target.value);
    }

    const findMovieByTitle = async () => {
        // dispatch(searchMovieByTitle(searchString));
        var {data} = await ShowsService.searchMovieByTitle(searchString);
        console.log(data);
        setSearchResults(data);
        setIsFromSearchResults(true);
        setSearchString('');
    }

    const spliceMovies = (arr: any, chunkSize: number) => {
        var res: any = [];
        while (arr.length > 0) {
            const chunk = arr.splice(0, chunkSize);
            res.push(chunk);
        }
        return res;
    }

    const moviesClone = [...movies]

    const myArr = spliceMovies(moviesClone, 25);
    // console.log(myArr);

    var page = 0;

    for(page; page < myArr.length; page++){
        // console.log(myArr[page]);
        // myArr[0].map((item: any) =>  console.log(item));
    }

    const handleScroll = (e: any) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) { console.log('bottom of div') }
    }

    return <HomeContainer>
        
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Search for a movie" 
                value={searchString}
                onChange={handleSearchChange}
            />
            <div className="search" onClick={findMovieByTitle}>
                <GoSearch />
            </div>
        </div>
        
        <div className="grid" onScroll={handleScroll}>
            {isFromSearchResults && searchResults.length > 0 ? ( 
                <>
                    {
                        searchResults.map((result: any, index: number) => {
                        return (
                            <Link
                                key={index}
                                to={{
                                    pathname: `/movies/${result.show?.id}`, 
                                    state: { movie: result.show },
                                }}
                            >
                                <MovieItem show={result.show} />
                            </Link>
                        );
                        }) 
                    }
                </>
                ) : movies.length === 0 ? (
                    <div className="loader">
                        <LoaderSpinner isLoading={loading} loadingText="Fetching Movies..." />
                    </div>
                ) : (
                    // movies.map((movie:any, index:number) => {
                    myArr[0].map((movie:any, index:number) => {
                    return (
                        <Link
                            to={{ pathname: `/movies/${movie.id}`, state: { movie: movie } }}
                            key={index}
                        >
                            <MovieItem show={movie} />
                        </Link>
                    );
                    })
                )}
        </div>
    </HomeContainer>
}

export default Home;
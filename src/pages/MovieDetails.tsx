import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

import styled from "styled-components";

import DualHeader from "../components/DualHeader";
import Genres from "../components/Genres";
import LoaderSpinner from "../components/LoaderSpinner";
import CastItem from "../components/CastItem";
import ParagraphText from "../components/ParagraphText";

import ShowsService from "../services/ShowsService";

import {AiOutlineHeart as LoveThis} from 'react-icons/ai';
import {FaHeart as Wishlisted} from 'react-icons/fa';
import {IoArrowBackSharp} from 'react-icons/io5';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

import { useDispatch } from "react-redux";

import {addMovieToWishlist, checkMovieExistsInWishlist} from '../actions/wishlist';

SwiperCore.use([Navigation]);

const MovieDetailsContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    color: var(--gray-1);
    padding: 2rem;
    display: flex;
    flex-direction: row;
    padding-top: 12rem;

    .meta {
        width: 25%;
        background-color: #3a3a3a;
        padding: 20px;

        .image {
            width: auto;
            height: 200px;
            border-radius: 20px;
            object-fit: contain;
        }

        h3 {
            font-size: 2.5rem;
            margin-top: 3rem;
            margin-bottom: 5rem;
            color: var(--primary);
        }

        h5 {
            font-size: 1.5rem;
            color: var(--primary);
        }

        .genres {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: .5rem;
        }
    }

    .story-cast {
        width: 75%;
        background-color: #6b6b6b;
        display: flex;
        flex-direction: column;
        padding: 20px;

        .info-actions {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .meh {
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                gap: 2rem;

                svg {
                    cursor: pointer;
                }
            }

            .wishlisted {
                svg {
                    fill: #FF0000;
                }
            }

            h3 {
                font-size: 3rem;
            }

            svg {
                width: 40px;
            }
        }

        h3 {
            font-size: 2rem;
            color: var(--deep-dark);
        }

        .story-line {
            margin-top: 10rem;
        }

        .cast-crew {
            margin-top: 5rem;
        }
    }

    @media only screen and (max-width: 768px) {
        margin-top: 8rem;
        padding-top: 10rem;
    }
`;

const MovieDetails = () => {
    
    const location = useLocation<any>()
    const history = useHistory();

    const movie = location.state?.movie;

    const [loading, setLoading] = useState(true);
    const [cast, setCast] = useState([]);

    const getCastCrew = async () => {
        setLoading(true);

        let response = await ShowsService.getShowCastAndCrew(movie.id);
        setCast(response.data);
        
        setLoading(false);
    }

    useEffect(()=>{
        setLoading(true);
        getCastCrew();
        checkMovie();
    }, []);

    const dispatch = useDispatch();

    const wishlistThisMovie = () => {
        dispatch(addMovieToWishlist(movie.id));
    }

    const checkMovie = () => {
        return dispatch(checkMovieExistsInWishlist(movie.id));
        // console.log(exists);
    }
    console.log(checkMovie());
    
    return <MovieDetailsContainer>
        
        <div className="meta">
            <div className="image" style={{backgroundImage: `url(${movie.image.original})`}}/>
            
            <h3>{movie.name}</h3>
            
            <h5>Genres</h5>
            <div className="genres">
                {movie.genres.length > 0 ? movie.genres.map((genre:any, index:number) => {
                    return <Genres title={genre} key={index}/>
                }) : 'No Genres Found'}
            </div>

            <DualHeader heading="Release Date:" subHeading={movie.premiered}/>
            
            <DualHeader heading="Language:" subHeading={movie.language}/>
            
            <DualHeader heading="Screen Time:" subHeading={movie.runtime + ' mins'}/>
            
            <DualHeader heading="Current Status:" subHeading={movie.status}/>
        </div>

        <div className="story-cast">
            <div className="info-actions">
                <div className="meh">
                    <IoArrowBackSharp onClick={()=> history.push('/')}/>
                    <h3>&#11088; {movie.rating.average != null ? movie.rating.average : 'Not Rated'} </h3>
                </div>
                <div onClick={wishlistThisMovie}> <LoveThis /> </div>
            </div>

            <div className="story-line">
                <h3>Storyline</h3>
                <ParagraphText text={movie.summary}/>
            </div>

            <div className="cast-crew">
                <h3>Cast &amp; Crew</h3>
                {
                    cast == null 
                        ? <LoaderSpinner 
                                isLoading={loading} 
                                loadingText="Loading Cast &amp; Crew"
                            />
                        : <Swiper
                                spaceBetween={150}
                                slidesPerView={1}
                                navigation
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    1200: {
                                        slidesPerView: 4,
                                    },
                                }}
                            >
                            {
                                cast.map((actor: any, index: number)=> {
                                    return <SwiperSlide key={index}>
                                                <CastItem 
                                                    image={actor.person.image.original}
                                                    name={actor.person.name}
                                                />
                                        </SwiperSlide>
                                })  
                            }
                        </Swiper>
                }
            </div>
        </div>
    </MovieDetailsContainer>
}

export default MovieDetails;
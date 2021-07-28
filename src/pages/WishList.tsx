import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

import styled from "styled-components";

import LoaderSpinner from "../components/LoaderSpinner";

import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {getAllMoviesInWishlist} from '../actions/wishlist';

const WishListContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    color: var(--gray-1);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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

    .wishlist {
        width: 230px;
        height: 250px;
        border-radius: 20px;
        z-index: 50;
        padding: 15px;
        position: relative;
        margin-top: 10rem;
            
        &:hover {
            cursor: pointer;
            transform: scale(1.1);
            transition: transform .2s;
        }

        .meta {
            display: flex;
            justify-content: space-between;
            font-size: 30px;

            svg {
                width: 30px;
            }
        }

        .release {
            position: absolute;
            bottom: 10px;

            h3 {
                font-size: 3rem;
                color: var(--primary);
            }
        }

        @media only screen and (max-width: 768px) {
            width: 200px;
            height: 250px;
        }
    }
`;

const WishList = () => {

    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    const wishlist = useSelector((state: RootStateOrAny) => state.wishlist);

    useEffect(()=> {
        setLoading(true);
        dispatch(getAllMoviesInWishlist());
    }, [dispatch])

    return <WishListContainer>
        {
            wishlist.length === 0 
                ? <div className="loader">
                        <LoaderSpinner 
                            isLoading={loading} 
                            loadingText="Loading Movies..."
                        />
                    </div>
                : wishlist.map((movie:any, index:number) => {
                    return <Link 
                                to={{pathname:`/movies/${movie.id}`, 
                                state: {movie: movie}}} key={index}
                            >
                                <div 
                                    className="wishlist" 
                                    style={{backgroundImage: `url(${movie.image.original})`}}
                                >
                                    <div className="meta">
                                        <h5> &#11088; {movie.rating.average} </h5>
                                    </div>
                                    <div className="release">
                                        <h3>{movie.name}</h3>
                                    </div>
                                </div>
                    </Link> 
                })
        }
    </WishListContainer>
}

export default WishList;
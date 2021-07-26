import { 
    GET_ALL_MOVIES_IN_WISHLIST, 
    ADD_MOVIE_TO_WISHLIST,
    CHECK_MOVIE_IN_WISHLIST 
} from './types';

import ShowsService from '../services/ShowsService';

export const getAllMoviesInWishlist = () => async (dispatch: any) => {
    try {
        let { data } = await ShowsService.getAllMoviesInWishlist();
        console.log(data);
        dispatch({type: GET_ALL_MOVIES_IN_WISHLIST, payload: data.wishlist});
    } catch (err) {
        console.log(err);
    }
}

export const addMovieToWishlist = (id: number) => async (dispatch: any) => {
    try {
        console.log(id);
        let { data } = await ShowsService.addMovieToWishlist(id);
        console.log(data);
        dispatch({type: ADD_MOVIE_TO_WISHLIST, payload: data});
    } catch (err) {
        console.log(err);
    }
}

export const checkMovieExistsInWishlist = (id: number) => async (dispatch: any) => {
    try {
        let { data } = await ShowsService.checkMovieIsWishlisted(id);
        console.log(data);
        console.log(data.success);
        dispatch({type: CHECK_MOVIE_IN_WISHLIST, payload: data.success});
    } catch (err) {
        console.log(err);
    }
}
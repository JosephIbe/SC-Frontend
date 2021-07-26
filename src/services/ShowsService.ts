import  axiosInstance from "../network/Axios";
import Axios from 'axios';

const getAllShows = async () => {
    return await axiosInstance.get('/shows');
}

const getSingleShow = async (id: number) => {
    return await axiosInstance.get( `/shows/${id}`);
}

const getShowCastAndCrew = async (id: any) => {
    return await axiosInstance.get(`/shows/${id}/cast`);
}

const searchMovieByTitle = async (title: string) => {
    return await axiosInstance.get(`/search/shows?q=${title}`);
}

const addMovieToWishlist = async (id: number) => {
    return await Axios.get(`https://muvi-meta-api.herokuapp.com/api/v1/wishlist/add-movie/${id}`);
}

const getAllMoviesInWishlist = async () => {
    return await Axios.get('https://muvi-meta-api.herokuapp.com/api/v1/wishlist/fetch-all');
}

const removeMovieItemFromWishlist = async (movie:any) => {}

const checkMovieIsWishlisted = async (id: number) => {
    return await Axios.get(`https://muvi-meta-api.herokuapp.com/api/v1/wishlist/check-exists/${id}`);
}

export default {
    getAllShows, 
    getSingleShow, 
    getShowCastAndCrew, 
    searchMovieByTitle,
    addMovieToWishlist,
    getAllMoviesInWishlist,
    checkMovieIsWishlisted,
    removeMovieItemFromWishlist
};
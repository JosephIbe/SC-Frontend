import {
    GET_ALL_SHOWS, 
    GET_SINGLE_SHOW,
} from './types';

import ShowsService from '../services/ShowsService';

export const fetchAllShows = () => async (dispatch: any) => {
    try {
        let response = await ShowsService.getAllShows();
        dispatch({type: GET_ALL_SHOWS, payload: response.data});
    } catch (error) {
        console.log(error);
    }
}

export const getSingleShow = (id: number) => async (dispatch: any) => {
    try {
        let {data} = await ShowsService.getSingleShow(id);
        console.log(data);
        dispatch({type: GET_SINGLE_SHOW, payload: data});
    } catch (err) {
        console.log(err);
    }
}


// export const searchMovieByTitle = (title: string) => async (dispatch: any) => {
//     try {
//         let response = await ShowsService.searchMovieByTitle(title);
//         console.log(response.data);
//         dispatch({type: GET_ALL_SHOWS, payload: response.data});
//     } catch (err) {
//         console.log(err);
//     }
// }
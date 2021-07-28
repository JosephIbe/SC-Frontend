import {
    SEARCH_MOVIE_BY_TITLE,
} from './types';

import ShowsService from '../services/ShowsService';

export const searchMovieByTitle = (title: string) => async (dispatch: any) => {
    try {
        let response = await ShowsService.searchMovieByTitle(title);
        console.log(typeof(response.data));
        console.log(response.data);
        const promise = response.data.map((items: any) => {
            // console.log(items);
            return items;
        })
        const searchArr = await Promise.all(promise);
        console.log(typeof(searchArr));
        console.log(searchArr);
        dispatch({type: SEARCH_MOVIE_BY_TITLE, payload: searchArr});
    } catch (err) {
        console.log(err);
    }
}
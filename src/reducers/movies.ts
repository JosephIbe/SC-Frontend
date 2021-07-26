import { 
    GET_ALL_SHOWS, 
    GET_SINGLE_SHOW,
    // SEARCH_MOVIE_BY_TITLE, 
} from "../actions/types";

const initialState: any = [];

const shows = (shows = initialState, action: any) => {
    const {type, payload} = action;

    switch (type) {
        case GET_ALL_SHOWS:
            return payload;
        case GET_SINGLE_SHOW:
            return payload;      
        // case SEARCH_MOVIE_BY_TITLE:
        //     return payload;
        default:
            return shows;
    }
}

export default shows;
import { 
    SEARCH_MOVIE_BY_TITLE, 
} from "../actions/types";

const initialState: any = [];

const search = (search = initialState, action: any) => {
    const {type, payload} = action;

    switch (type) {
        case SEARCH_MOVIE_BY_TITLE:
            return payload;
        default:
            return search;
    }
}

export default search;
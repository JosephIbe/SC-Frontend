import { 
    GET_ALL_MOVIES_IN_WISHLIST, 
    ADD_MOVIE_TO_WISHLIST,
    CHECK_MOVIE_IN_WISHLIST 
} from '../actions/types';

const initialState:any = [];

const wishlist = (wishlist = initialState, action: any) => {
    const {type, payload} = action;

    switch (type) {
        case GET_ALL_MOVIES_IN_WISHLIST:
            return payload;
        case ADD_MOVIE_TO_WISHLIST:
            return payload;
        case CHECK_MOVIE_IN_WISHLIST:
            return payload;
        default:
            return wishlist;
    }
}

export default wishlist;
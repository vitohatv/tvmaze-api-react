import {FETCH_SHOW_SUCCESS, SEARCH_SUCCESS} from './actionTypes';

const initialState = {
    searchResults: [],
    show: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_SUCCESS:
            return {...state, searchResults: action.searchResults};
        case FETCH_SHOW_SUCCESS: 
            return {...state, show: action.show};
        default: 
            return state;
    };
};

export default reducer;
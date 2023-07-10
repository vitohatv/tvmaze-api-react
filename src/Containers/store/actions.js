import {FETCH_SHOW_SUCCESS, SEARCH_SUCCESS} from './actionTypes';
import axios from '../../axiosInstance';


const searchSucces = (searchResults) => {
    return {type: SEARCH_SUCCESS, searchResults};
};

export const search = (query) => {
    return async (dispatch) => {
        const response = await axios.get(`/search/shows?q=${query}`);
        dispatch(searchSucces(response.data));
    };
};

const fetchShowSuccess = (show) => {
    return {type: FETCH_SHOW_SUCCESS, show};
};

export const fetchShow = (id) => {
    return async (dispatch) => {
        const response = await axios.get("/shows/" + id);
        dispatch(fetchShowSuccess(response.data));
    };
};
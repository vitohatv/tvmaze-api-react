import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { fetchShow } from '../../Containers/store/actions';
import './Films.css';


const Films = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const show = useSelector(state => state.show);

    useEffect(() => {
        dispatch(fetchShow(params.id));
    }, [dispatch, params.id]);

    const removeTags = (text) => {
        if (text === null || text === "") {
        return false;
    } else {
        text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
    };


    return (
        <div className="films">
            <div className='films-show-block'>
                <img src={show.image?.medium} alt={show.name}/>
                <div className='film-info'>
                    <h1 className='film-name'>{show.name}</h1>
                    <p className='film-premiered'>{show.premiered}</p>
                    <p className='film-summary'>{show.summary && removeTags(show.summary)}</p>
                </div>
            </div>
        </div>   
    )
}
export default Films;
import { useCallback, useEffect, useState } from 'react';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../../Containers/store/actions';

const SearchBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const results = useSelector(state => state.searchResults);
    const [value, setValue] = useState('');

    const changeValue = async (e) => {
        const {value} = e.target;
        setValue(value);
        dispatch(search(value));
    }
    const hideDropDown = useCallback(() => {
        dispatch(search([]));
    }, [dispatch])

    const onSelectItem = (id) => {
        navigate("/shows/" + id);
    }
    useEffect(() => {
        return () => hideDropDown;
    }, [hideDropDown])




    return (
        <div className="input-text">
            <h1 className='input-title'>Film List on React Redux</h1>
            <input 
                    type="text" 
                    value={value}
                    className='input-films'
                    onChange={changeValue} 
                    placeholder='Enter your film'
            />
            {
               results.length > 0
            } {
                results.map(({show}) => {
                    return <div 
                    key={show.id} 
                    onClick={() => onSelectItem(show.id)}
                    onChange={(e) => setValue(e.target.value)}
                    className='film-name-text'
                    >
                    {show.name}
                    </div>
                })
            }
        </div>
    )
}

export default SearchBar;
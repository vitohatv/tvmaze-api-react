import { Outlet, NavLink } from 'react-router-dom';
import SearchBar from '../../Components/SearchBar/SearchBar';
import './Layout.css'
const Layout = () => {
    return <>
        <header className='header'>
            <div className='container'>
                <div className='header-content'>
                    <NavLink to='/' className='header-link'>Tv Shows API</NavLink>
                </div>
            </div>
        </header>
        <main>
            <SearchBar />
            <Outlet/>
        </main>
    </>  
}

export default Layout;
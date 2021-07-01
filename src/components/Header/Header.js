import './header.css';
import { useState } from 'react';

const Header = ({title}) => {
    const [searchVisible, setSearchVisible] = useState(false);
    
    const showSearch = () => {
        setSearchVisible(!searchVisible);
    }
    
    return (
        <div className="header">
            <div className="fa fa-more"></div>
            <span className="title">{title}</span>
            <input 
                type="text"
                className="searchInput"
                placeholder="Search..."
            />
            <div className="fa fa-search searchIcon"></div>
        </div>
    )
}

export default Header;
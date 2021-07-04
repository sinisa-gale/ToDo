import './header.css';
import logo from './search-icon.png';
import { useState } from 'react';
import Search from '../Search/Search';

const Header = ({title='Some title', submitting}) => {
    const [searchVisible, setSearchVisible] = useState(false);
    
    const showSearch = () => {
        setSearchVisible(!searchVisible);
    }

    const handleSearch = (e) => {
        console.log(e)
        fetch('https://dog.ceo/api/breed/beagle/images/random')
        .then(resp => resp.json())
        .then(data => console.log(data.message))
        .catch(err => console.log(err))
    }
    
    
    return (
        <div className="header">
            <div className="fa fa-more"></div>
            <span className="title">{title}</span>
            {searchVisible && <Search submitting={handleSearch}/>}
            <div className="fa fa-search searchIcon">
                <img src={logo} onClick = {showSearch}/>
            </div>
        </div>
    )
}

export default Header;
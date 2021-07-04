import { useState } from "react";

const Search = ({submitting}) => {
    const [searchValue, setSearchValue] = useState('');

    const searchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    const submittingForm = (event) => {
        event.preventDefault();
        submitting(searchValue);
    }

    

    return (
        <form onSubmit={event => submittingForm(event)}>
            <input
                type="text"
                className="searchInput"
                placeholder="Search..."
                value={searchValue}
                onChange={(event) => searchValueChange(event)}
            />
        </form>

    )
}

export default Search;
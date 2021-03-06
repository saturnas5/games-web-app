import React, {useState} from "react";
import {useSelector} from "react-redux";
import OptionSelect from "../OptionSelect";
import LibraryList from "../LibraryList";
import {FaSearch} from "react-icons/fa";

const Library = () => {
    const user = useSelector(state => state.user);
    const [searchVal, setSearchVal] = useState('');

    return (
        <div className="library">
            <div className="library__filter-box">
                <div className="library__filter-box-sort">
                    <OptionSelect options={['Date added', 'Name', 'Release date', 'Popularity', 'Average rating']} label='Order by'/>
                    <OptionSelect options={['PC', 'PlayStation', 'Xbox', 'Nintendo', 'Mac', 'Android']} label='Platform'/>
                    <OptionSelect options={['Action', 'Shooter', 'Adventure', 'RPG', 'Strategy']} label='Genre'/>
                </div>
                <div className="library__search-input-box">
                    <FaSearch className="library__search-input-icon"/>
                    <input value={searchVal} onChange={text => setSearchVal(text.target.value)} type="text" className="library__search-input" placeholder='Search Library'/>
                </div>
            </div>
            <div className="library__games-list">
                <LibraryList icon='thumb' label='Uncategorized' library='uncategorized'/>
                <LibraryList icon='game' label='Currently playing' library='playing'/>
                <LibraryList icon='completed' label='Completed' library='completed'/>
                <LibraryList icon='played' label='Played' library='played'/>
                <LibraryList icon='wanted' label='Want Play' library='wantPlay'/>
            </div>
        </div>
    );
};

export default Library;
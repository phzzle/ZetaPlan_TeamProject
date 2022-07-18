import React, { useState } from 'react';
import './searchForm.css';
import { FaSearch } from "react-icons/fa";

const SearchForm = () => {
  const [word, setWord] = useState("");

  const onSubmit = async () => {
    window.location.href = "/search/" + word;
  };

  const onKeyPress = (e) => {
    if(e.key === "Enter") {
      
    }
  }

  return (
    <div id="SearchForm" className='search-box'>
      <form>
        <input type='text' className='search-input' name='search' placeholder='검색어를 입력하세요.'
        onChange={(e) => {setWord(e.target.value)}} onKeyPress={onKeyPress} />
        <button type="button" onClick={() => {onSubmit()}} className="search-submit-btn"><FaSearch size="1.2rem" fill='#2c3540'/>검색</button>
      </form>
    </div>
  );
};

export default SearchForm;
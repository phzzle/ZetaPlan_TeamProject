import React, { useState } from 'react';
import './searchForm.css';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './../../css/Common/search.css';

const BoardSearch1 = () => {
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  const onSubmit = async () => {
    window.location.href = "/notice/" + word;
  };

  const onKeyPress = (e) => {
    if(e.key === "Enter") {
      navigate(`/notice/${word}`);
    }
  }

  return (
    <div id="SearchForm" className='board-search-box'>
      <form>
        <FaSearch size="1.5rem" fill='#fff'/>
        <input type='text' className='search-input' name='search' placeholder='검색어를 입력하세요.'
        onChange={(e) => {setWord(e.target.value)}} onKeyPress={onKeyPress} />
        <button type="button" onClick={() => {onSubmit()}} className="search-submit-btn">검색</button>
      </form>
    </div>
  );
};

export default BoardSearch1;
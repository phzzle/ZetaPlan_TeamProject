import React, { useState } from 'react';
import './searchForm.css';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const BoardSearch2 = () => {
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  const onSubmit = async () => {
    window.location.href = "/notice/news/" + word;
  };

  const onKeyPress = (e) => {
    if(e.key === "Enter") {
      navigate(`/notice/news/${word}`);
    }
  }

  return (
    <div id="SearchForm" className='board-search-box'>
      <form>
        <input type='text' className='search-input' name='search' placeholder='검색어를 입력하세요.'
        onChange={(e) => {setWord(e.target.value)}} onKeyPress={onKeyPress} />
        <FaSearch size="1.2rem" fill='#2c3540'/>
        <button type="button" onClick={() => {onSubmit()}} className="search-submit-btn">검색</button>
      </form>
    </div>
  );
};

export default BoardSearch2;
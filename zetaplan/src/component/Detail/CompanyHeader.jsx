import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { useState } from "react";

const CompanyHeader = () => {
  const menuList = [["기업소개", '/company/info'], ["CI", '/company/ci'], ["Manpower", '/company/manpower'], ["협력기관", '/company/collabo'], ["연혁", '/company/history'], ["오시는 길", '/company/road']];
  const [selectedMenu, setSelectedMenu] = useState("기업소개");

  const handleSelectedMenu = (e) => {
    setSelectedMenu(e.target.value);
  };

  return (
    <div id='CompanyHeader'>
      <div className='company-header-banner'>
        <div>
          <h2>Company</h2>
          <p></p>
        </div>
        <nav>
          <Link to='/'><AiFillHome /></Link>
          <Link to='/company'>Company</Link>
          <Link to={selectedMenu[2]}>{selectedMenu[1]}</Link>
          <div>
            <select onChange={handleSelectedMenu} value={selectedMenu[1]}>
              {menuList.map((item) => (
                <option value={item} key={item}>{item[1]}</option>
              ))}
            </select>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default CompanyHeader;
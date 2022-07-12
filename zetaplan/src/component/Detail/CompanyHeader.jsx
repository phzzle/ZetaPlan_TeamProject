import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { useState } from "react";
import './companyHeader.css';
import Header from '../Header/Header';

const CompanyHeader = () => {
  const navigate = useNavigate();

  return (
    <div id='CompanyHeader'>
      <Header />
      <div className='company-header-banner'>
        <div className='company-header-title-wrap'>
          <h2 className='company-header-title'>Company</h2>
          <p className='company-header-des'>지구상의 모든 기업들의 시작과 성장과 안정을 위한 컨설팅 솔루션 제공</p>
        </div>
        <nav className='company-header-nav'>
          <a href='/'><AiFillHome size="30px" /></a>
          <ul className='sub-nav-depth1'>
            <li><a href="/company">Company</a></li>
            <li><a href="/mna">M&A/IPO</a></li>
            <li><a href="/invest">Invest</a></li>
            <li><a href="/abroad">Abroad</a></li>
            <li><a href="/industry">Industry</a></li>
            <li><a href="/notice">Notice</a></li>
          </ul>
          <ul className='sub-nav-depth1'>
            <li><a href="/company/info">기업소개</a></li>
            <li><a href="/company/ci">CI</a></li>
            <li><a href="/company/manpower">Manpower</a></li>
            <li><a href="/company/collabo">협력기관</a></li>
            <li><a href="/company/history">연혁</a></li>
            <li><a href="/company/road">오시는길</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CompanyHeader;
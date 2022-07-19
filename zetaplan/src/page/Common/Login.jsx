import React, { useState, useEffect } from 'react';
import Header from '../../component/Header/Header';
import DetailFooter from '../../component/Detail/DetailFooter';
import '../../css/Common/login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuth }) => {
  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')

  const handleInputId = (e) => {
    setInputId(e.target.value)
}

const handleInputPw = (e) => {
    setInputPw(e.target.value)
}

// login 버튼 클릭 이벤트
const onClickLogin = () => {
    console.log('click login')
}

// 페이지 렌더링 후 가장 처음 호출되는 함수
useEffect(() => {
    fetch('/user_inform/login')
    .catch()
}, [])

  return (
    <div>
      <Header />
      <div id='SubInner'>
        <div className='login'>
          <span>관리자 로그인 페이지</span>
          <div>
            <label htmlFor='admin_id'>ID : </label>
            <input type='text' name='admin_id' value={inputId} onChange={handleInputId} />
          </div>
          <div>
            <label htmlFor='admin_pw'>PW : </label>
            <input type='password' name='admin_pw' value={inputPw} onChange={handleInputPw} />
          </div>
          <div>
            <button type='button' onClick={onClickLogin}>Login</button>
          </div>
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default Login;

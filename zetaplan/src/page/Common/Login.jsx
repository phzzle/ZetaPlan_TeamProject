import React, { useState } from 'react';
import Header from '../../component/Header/Header';
import DetailFooter from '../../component/Detail/DetailFooter';
import '../../css/Common/login.css';
import { useNavigate } from 'react-router-dom';
import { GrFormNext } from "react-icons/gr";

const Login = ({ setAuth }) => {
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    id: "",
    password: "",
  });
  const [adminID, setAdminID] = useState('');
  const [adminPW, setAdminPW] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');

  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
    setAdminID(e.target.value);
    setAdminPassword(e.target.value);
  };

  const checkID = () => {
    if ( adminID === "admin" ) {
      setAdminPW(true);
    } else {
      alert("아이디가 틀렸습니다.")
    }
  }

  const checkPW = () => {
    if ( adminPassword === "zetaplan") {
      setAuth(true);
      navigate('/')
    } else {
      alert("비밀번호가 틀렸습니다.")
    }
  }

  return (
    <div>
      <Header />
      <div id='SubInner'>
        <div className="company-title-container">
          <h2 className='company-title'>로그인</h2>
          <div className='company-title-line'></div>
        </div>
        <div className='login'>
          <span className='company-road-part'>관리자 로그인 페이지</span>
          <form className='login-box'>
            <div className='login-id'>
              <label htmlFor='admin_id'>ID : </label>
              <input type='text' name='admin_id' onChange={onChangeAccount} />
              <button type='button' className='login-check-id-btn' onClick={checkID}><GrFormNext size="26px" /></button>
            </div>
            <div className={adminPW === true ? 'login-password on' : 'login-password'}>
              <label htmlFor='admin_pw'>PW : </label>
              <input type='password' name='admin_pw' onChange={onChangeAccount} />
            </div>
            <div>
              <button type='button' onClick={checkPW}>Login</button>
            </div>
          </form>
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default Login;

import React from 'react';
import Header from '../../component/Header/Header';
import DetailFooter from '../../component/Detail/DetailFooter';
import '../../css/Common/login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuth }) => {
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    setAuth(true);
    navigate('/');
  };
  return (
    <div>
      <Header />
      <div id='SubInner'>
        <div className='login-page'>
          <h1 className='login-title'>관리자 로그인</h1>
          <div className='login-box'>
            <form
              onSubmit={(e) => {
                login(e);
              }}
            >
              <div>
                <div>
                  <label htmlFor='userId'>아이디</label>
                </div>
                <div>
                  <input type='text' id='userId' placeholder='admin' />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor='userPass'>비밀번호</label>
                </div>
                <div>
                  <input type='password' id='userPass' placeholder='passward' />
                </div>
              </div>
              <div>
                <input type='submit' value='로그인' />
              </div>
            </form>
          </div>
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default Login;

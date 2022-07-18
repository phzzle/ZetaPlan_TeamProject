import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import NoticeHeader from '../../component/Detail/NoticeHeader';
// import '../../css/Notice/noticeRequest.css';
import { useNavigate } from 'react-router-dom';

const NoticeInquiryForm = ({ title, sub }) => {
  const navigate = useNavigate();
  const goBack = ()=>{
    // 취소버튼 클릭시 이전페이지로 이동
    navigate(-1);
  }
  return (
    <div>
      <NoticeHeader title={title} sub={sub} />
      <div id="SubInner">
        <h2 className="detail-title">
          문의하기
        </h2>
        <form action="" id='requestForm'>
          <table className='request-form-table'>
            <colgroup>
              <col style={{width: "27%"}} />
              <col style={{width: "63%"}} />
            </colgroup>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="inquiryTitle">제목</label>
                </th>
                <td>
                  <input type="text" id='inquiryTitle' />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="inquiryAuthor">작성자</label>
                </th>
                <td>
                  <input type="text" id='inquiryAuthor' />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="inquiryPw">비밀번호</label>
                </th>
                <td>
                  <input type="password" id='inquiryPw' />
                </td>
              </tr>
              <tr>
                <th>
                  비밀글
                </th>
                <td>
                  <input type="checkbox" id='inquiryLock' />
                  <label htmlFor="inquiryLock">비밀글로 작성하겠습니다.</label>
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor='inquiryContents' className='contents-title'>문의 내용</label>
                </th>
                <td>
                  <textarea name="" id="inquiryContents" cols="30" rows="10"></textarea>
                </td>
              </tr>
              <tr>
                <th>썸네일</th>
                <td>
                  <input type="file" />
                </td>
              </tr>
              <tr>
                <th>첨부파일</th>
                <td>
                  <input type="file" />
                </td>
              </tr>
              <tr>
                <th>첨부파일2</th>
                <td>
                  <input type="file" />
                </td>
              </tr>
              <tr>
                <th>통합검색</th>
                <td>
                  <select name="inquirySearchRange" id="inquirySearchRange">
                    <option value="제목과 내용">제목과 내용 검색허용</option>
                    <option value="제목">제목만 검색허용(비밀글)</option>
                    <option value="비허용">통합검색 제외</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="submit-btn-group">
            <button type='submit' className='request-submit-btn'>문의하기</button>
            <button type='button' className='request-cancel-btn' onClick={goBack}>취소</button>
          </div>
        </form>
      </div>
      <DetailFooter />
    </div>
  );
};

export default NoticeInquiryForm;
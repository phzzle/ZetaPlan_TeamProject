import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import NoticeHeader from '../../component/Detail/NoticeHeader';

const NoticeRequest = ({title, sub}) => {
  return (
    <div>
      <NoticeHeader title={title} sub={sub}/>

      <div id="SubInner">
        <h2 className='notice-request-title'>컨설팅 신청</h2>
        <form action="">
          <div className="request-category">
            <label htmlFor="">컨설팅 분야</label>
            <select name="" id="">
              <option value="">-- 컨설팅 분야를 선택해주세요. --</option>
              <option value="">M&amp;A구조조정</option>
              <option value="">기업공개(IPO)</option>
              <option value="">기업인증</option>
              <option value="">정책자금</option>
              <option value="">경영자문</option>
              <option value="">품질/시스템</option>
            </select>
            <div className='request-category-chkbox'>
              <input type="checkbox" />
              <label htmlFor="">기업매도</label>
              <input type="checkbox" />
              <label htmlFor="">기업매수</label>
              <input type="checkbox" />
              <label htmlFor="">기업분할</label>
              <input type="checkbox" />
              <label htmlFor="">기업합병</label>
              <input type="checkbox" />
              <label htmlFor="">구조조정</label>
              <input type="checkbox" />
              <label htmlFor="">기업회생</label>
              <input type="checkbox" />
              <label htmlFor="">기타</label>
            </div>
          </div>
          <div>
            <label htmlFor="">제목</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">성명</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">연락처</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">회사명</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">회사 분류</label>
            <select name="" id="">
              <option value="">거래소기업</option>
              <option value="">코스닥기업</option>
              <option value="">프리보드기업</option>
              <option value="">장외거래기업</option>
              <option value="">외부감사기업</option>
              <option value="">비상장기업</option>
              <option value="">기술거래</option>
              <option value="">개인기업</option>
            </select>
          </div>
          <div>
            <label htmlFor="">회사 업종</label>
            <select name="" id="">
              <option value="">농림수산업/광업</option>
              <option value="">식품/생활용품</option>
              <option value="">섬유/의복/신발</option>
              <option value="">제지/출판</option>
              <option value="">화학/정유/석유</option>
              <option value="">고무/플라스틱</option>
              <option value="">전기/전자/통신</option>
              <option value="">기계/장비/금속</option>
              <option value="">의료/정밀기기</option>
              <option value="">부품/소재</option>
              <option value="">의약/바이오</option>
              <option value="">금융</option>
              <option value="">건설/토목</option>
              <option value="">컴퓨터/방송/영상</option>
              <option value="">소프트웨어</option>
              <option value="">인터넷</option>
              <option value="">물류/유통/도소매</option>
              <option value="">운송/통신서비스</option>
              <option value="">오락/문화서비스</option>
              <option value="">교육/기술서비스</option>
            </select>
          </div>
          <div>
            <label htmlFor="">회사 주소</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">당기 매출</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">예상 매출</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">상담신청 내용</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div>
            <label htmlFor="">첨부파일</label>
            <input type="file" />
          </div>
        </form>
      </div>

      <DetailFooter />
    </div>
  );
};

export default NoticeRequest;
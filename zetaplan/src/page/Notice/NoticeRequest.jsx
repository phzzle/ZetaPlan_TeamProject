import React, { useState } from 'react';
import '../../css/Notice/noticeRequest.css';
import { useNavigate } from 'react-router-dom';
import DetailFooter from '../../component/Detail/DetailFooter';
import NoticeHeader from '../../component/Detail/NoticeHeader';

const NoticeRequest = ({title, sub}) => {
  const navigate = useNavigate();
  const [categoryNum, setCategoryNum] = useState(0);
  const category = [
    {
      id: 1,
      category: 'M&A구조조정',
      detail: ['기업매도', '기업매수', '기업분할', '기업합병', '구조조정', '기업회생', '기타']
    },
    {
      id: 2,
      category: '기업공개(IPO)',
      detail: ['코스닥', '코넥스상장', '유가증권', '주식공모', '우회상장', '해외상장', 'IR', '기타']
    },
    {
      id: 3,
      category: '기업인증',
      detail: ['벤처기업', '이노비즈', '메인비즈', '연구소', '유망중소기업', '예비벤처', '기타']
    },
    {
      id: 4,
      category: '정책자금',
      detail: ['운전자금', '시설자금', '기술금융', '창업자금', '출연자금', 'B2B 구매', 'P-CBO', '사업전환', '현동화', '협업화', '성장공유', '협업사업', '수출금융', '기타']
    },
    {
      id: 5,
      category: '경영자문',
      detail: ['투자금융', 'PF 금융', '기업진단', '전략컨설팅', '재무자문', '계약자문', '법률자문', '기술/기업 가치평가', '학술용역', '세무회계', '인사/노무', '쿠폰제 컨설팅', '기타']
    },
    {
      id: 6,
      category: '품질/시스템',
      detail: ['ISO', 'NET', 'NEP', 'GS', 'GD', 'KS', 'CE', 'UL', 'CCC', 'JJS', 'FDA', 'RoHS', 'K마크', 'HACCP', 'OHSAS', 'TS16949', 'TL9000', 'Q마크', 'S마크', 'KPS', '우수제품', '서비스품질우수기업', '국방품질경영시스템', 'IR52', '고효율기자재', '특허', '실용신안', '디자인', '성능인증', '친환경마크', '기타']
    }
  ];
  const handleCategoryFnc = (e) => {
    let currentCategory = e.target.value;
    let select = category.filter((item)=>{return item.category === currentCategory});
    setCategoryNum(select[0] !== undefined ? select[0].id : 0);
    // e.target.value가 category.category 와 같다면 그에 해당하는 id를 state로 설정한다.
  }
  const goBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <NoticeHeader title={title} sub={sub}/>

      <div id="SubInner">
        <h2 className='detail-title'>컨설팅 신청</h2>
        <form action="" id='requestForm'>
          <table className='request-form-table'>
            <colgroup>
              <col style={{width: '28%'}} />
              <col style={{width: '72%'}} />
            </colgroup>
            <tbody>
              <tr>
                <th>
                  컨설팅 분야
                </th>
                <td>
                  <select name="category" className='consulting-category' onChange={handleCategoryFnc}>
                    <option value="none">-- 컨설팅 분야를 선택해주세요. --</option>
                    <option value="M&amp;A구조조정">M&amp;A구조조정</option>
                    <option value="기업공개(IPO)">기업공개(IPO)</option>
                    <option value="기업인증">기업인증</option>
                    <option value="정책자금">정책자금</option>
                    <option value="경영자문">경영자문</option>
                    <option value="품질/시스템">품질/시스템</option>
                  </select>
                  <div className='request-category-chkbox'>
                    {
                      categoryNum
                      ? category[categoryNum-1].detail.map((ele, idx)=>{
                        return (
                          <span className='category-chkbox-item' key={idx}>
                            <input type="checkbox" value={ele} id={'category' + idx} />
                            <label htmlFor={"category" + idx}>{ele}</label>
                          </span>
                        )
                      })
                      : null
                    }
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="FormTitle">제목</label>
                </th>
                <td><input type="text" id='FormTitle' className='full-input' /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="userName">성명</label>
                </th>
                <td><input type="text" id='userName' /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="userTel">연락처</label>
                </th>
                <td><input type="text" id='userTel' /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="userPos">직책</label>
                </th>
                <td><input type="text" id='userPos' /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="companyName">회사명</label>
                </th>
                <td><input type="text" id='companyName' className='full-input' /></td>
              </tr>
              <tr>
                <th>
                  회사 분류
                </th>
                <td>
                  <select name="companyGroup">
                    <option value="">--분류를 선택해주세요. --</option>
                    <option value="거래소기업">거래소기업</option>
                    <option value="코스닥기업">코스닥기업</option>
                    <option value="프리보드기업">프리보드기업</option>
                    <option value="장외거래기업">장외거래기업</option>
                    <option value="외부감사기업">외부감사기업</option>
                    <option value="비상장기업">비상장기업</option>
                    <option value="기술거래">기술거래</option>
                    <option value="개인기업">개인기업</option>
                  </select>  
                </td>
              </tr>
              <tr>
                <th>
                  회사 업종
                </th>
                <td>
                  <select name="companyType">
                    <option value="">-- 업종을 선택해주세요. --</option>
                    <option value="농림수산업/광업">농림수산업/광업</option>
                    <option value="식품/생활용품">식품/생활용품</option>
                    <option value="섬유/의복/신발">섬유/의복/신발</option>
                    <option value="제지/출판">제지/출판</option>
                    <option value="화학/정유/석유">화학/정유/석유</option>
                    <option value="고무/플라스틱">고무/플라스틱</option>
                    <option value="전기/전자/통신">전기/전자/통신</option>
                    <option value="기계/장비/금속">기계/장비/금속</option>
                    <option value="의료/정밀기기">의료/정밀기기</option>
                    <option value="부품/소재">부품/소재</option>
                    <option value="의약/바이오">의약/바이오</option>
                    <option value="금융">금융</option>
                    <option value="건설/토목">건설/토목</option>
                    <option value="컴퓨터/방송/영상">컴퓨터/방송/영상</option>
                    <option value="소프트웨어">소프트웨어</option>
                    <option value="인터넷">인터넷</option>
                    <option value="물류/유통/도소매">물류/유통/도소매</option>
                    <option value="운송/통신서비스">운송/통신서비스</option>
                    <option value="오락/문화서비스">오락/문화서비스</option>
                    <option value="교육/기술서비스">교육/기술서비스</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="companyAddr">회사 주소</label>
                </th>
                <td><input type="text" id='companyAddr' /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="currentSale">당기 매출</label>
                </th>
                <td><input type="text" id='currentSale' /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="projectionSale">예상 매출</label>
                </th>
                <td><input type="text" id='projectionSale' /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="contents">상담신청 내용</label>
                </th>
                <td><textarea id='contents' /></td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="addFile">첨부파일</label>
                </th>
                <td><input type="file" id='addFile' /></td>
              </tr>
            </tbody>
          </table>
          <div className="submit-btn-group">
            <button type="submit" className='request-submit-btn'>신청하기</button>
            <button type='button' className='request-cancel-btn' onClick={goBack}>취소</button>
          </div>
        </form>
      </div>

      <DetailFooter />
    </div>
  );
};

export default NoticeRequest;
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailFooter from '../../component/Detail/DetailFooter';
import IndustryHeader from '../../component/Detail/IndustryHeader';
import IndustryConfirmList1 from '../../component/Industry/IndustryConfirm/IndustryConfirmList1';
import { MAP_DATA_CONFIRM } from './../../component/Industry/IndustryConfirm/MapDataConfirm';
import IndustryConfirmList0 from './../../component/Industry/IndustryConfirm/IndustryConfirmList0';
import IndustryConfirmList2 from './../../component/Industry/IndustryConfirm/IndustryConfirmList2';


const IndustryConfirmDetail = ({data}) => {
  let {id} = useParams();
  const [content, setContent] = useState('');

  const buttonValueSetting = e => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: <IndustryConfirmList0 />,
    second: <IndustryConfirmList1 />,
    third: <IndustryConfirmList2 />
  };

  return (
    <div id='IndustryConfirmDetail'>
      <IndustryHeader title="Industry" sub="기업/기술 인증" />
      <div id='SubInner'>
        <h2 className='detail-title'>지원 사업</h2>
        <nav className='detail-tab-lists'>
          {MAP_DATA_CONFIRM.map(data => {
          return (
            <button className={content === data.name? 'detail-tab-list active' : 'detail-tab-list'} onClick={buttonValueSetting} name={data.name} key={data.id}>
              {data.text}
            </button>
          );
        })}
      </nav>
      {content && <div className='detail-tab-content'>{selectComponent[content]}</div>}
      <div className='industry-confirm-content'>
        <h4 className='company-road-part'>{data[id].name}</h4>
        <div className='industry-confirm-content-logo'>
          <img src={data[id].img} alt="logo" />
        </div>
        <h4 className='company-road-part'>개요</h4>
        <p>{data[id].info}</p>
        <h4 className='company-road-part'>인증기관 및 평가기관</h4>
        <p>{data[id].by}</p>
        <h4 className='company-road-part'>대상 요건</h4>
        <div className='industry-confirm-content-img'>
          <img src={data[id].target} alt="대상요건" />
        </div>
        <h4 className='company-road-part'>유효기간</h4>
        <p>{data[id].valid}</p>
        <h4 className='company-road-part'>신청접수</h4>
        <p>{data[id].accept}</p>
        <h4 className='company-road-part'>신청서류</h4>
        <p>{data[id].paper}</p>
        <h4 className='company-road-part'>평가비용</h4>
        <p>{data[id].price}</p>
        <h4 className='company-road-part'>소요기간</h4>
        <p>{data[id].date}</p>
        <h4 className='company-road-part'>혜택</h4>
        <div className='industry-confirm-content-img'>
          <img src={data[id].benefit} alt="혜택" />
        </div>
        <h4 className='company-road-part'>절차</h4>
        <div className='industry-confirm-content-img'>
          <img src={data[id].step} alt="절차" />
        </div>
        
      </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default IndustryConfirmDetail;
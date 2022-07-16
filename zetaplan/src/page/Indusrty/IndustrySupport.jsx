import React, { useState } from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import IndustryHeader from '../../component/Detail/IndustryHeader';
import './../../css/Indusrty/industrySupport.css';
import IndustrySupport1 from './../../component/Industry/IndustrySupport/IndustrySupport1';
import IndustrySupport2 from './../../component/Industry/IndustrySupport/IndustrySupport2';
import IndustrySupport3 from './../../component/Industry/IndustrySupport/IndustrySupport3';
import IndustrySupport4 from './../../component/Industry/IndustrySupport/IndustrySupport4';
import { MAP_DATA } from './../../component/Industry/IndustrySupport/MapData';

const IndustrySupport = ({title, sub}) => {
  const [content, setContent] = useState('first');

  const buttonValueSetting = e => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: <IndustrySupport2 />,
    second: <IndustrySupport4 />
  };

  return (
    <div id='IndustrySupport'>
      <IndustryHeader title={title} sub={sub} />
      <div id='SubInner'>
      <div className="company-title-container">
          <h2 className="company-title">지원사업</h2>
          <div className="company-title-line"></div>
        </div>
        <nav className='detail-tab-lists'>
          {MAP_DATA.map(data => {
          return (
            <button className={content === data.name? 'detail-tab-list active' : 'detail-tab-list'} onClick={buttonValueSetting} name={data.name} key={data.id}>
              {data.text}
            </button>
          );
        })}
      </nav>
      {content && <div className='detail-tab-content '>{selectComponent[content]}</div>}
      </div>
      <DetailFooter />
    </div>
  );
};

export default IndustrySupport;
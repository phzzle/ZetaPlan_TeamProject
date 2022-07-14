import React, { useState } from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import IndustryHeader from '../../component/Detail/IndustryHeader';
import './../../css/Indusrty/industrySupport.css';
import IndustrySupport1 from './../../component/IndustrySupport/IndustrySupport1';
import IndustrySupport2 from './../../component/IndustrySupport/IndustrySupport2';
import IndustrySupport3 from './../../component/IndustrySupport/IndustrySupport3';
import IndustrySupport4 from './../../component/IndustrySupport/IndustrySupport4';
import { MAP_DATA } from './../../component/IndustrySupport/MapData';

const IndustrySupport = ({title, sub}) => {
  const [content, setContent] = useState('first');

  const buttonValueSetting = e => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: <IndustrySupport1 />,
    second: <IndustrySupport2 />,
    third: <IndustrySupport3 />,
    fourth: <IndustrySupport4 />
  };

  return (
    <div id='IndustrySupport'>
      <IndustryHeader title={title} sub={sub} />
      <div id='SubInner'>
        <h2 className='detail-title'>지원 사업</h2>
        <nav className='industry-support-lists'>
          {MAP_DATA.map(data => {
          return (
            <button className={content === data.name? 'industry-support-list active' : 'industry-support-list'} onClick={buttonValueSetting} name={data.name} key={data.id}>
              {data.text}
            </button>
          );
        })}
      </nav>
      {content && <div className='industry-support-content '>{selectComponent[content]}</div>}
      </div>
      <DetailFooter />
    </div>
  );
};

export default IndustrySupport;
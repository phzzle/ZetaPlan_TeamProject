import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import IndustryHeader from '../../../component/Detail/IndustryHeader';
import IndustryConfirmList0 from './../../../component/Industry/IndustryConfirm/IndustryConfirmList0';
import IndustryConfirmList1 from './../../../component/Industry/IndustryConfirm/IndustryConfirmList1';
import IndustryConfirmList2 from './../../../component/Industry/IndustryConfirm/IndustryConfirmList2';
import { MAP_DATA_CONFIRM } from './../../../component/Industry/IndustryConfirm/MapDataConfirm';

const IndustryConfirmContent = (props) => {
  let { id } = useParams(); 
  let matchedItem = props.data.find(function(item){
        return item.id === id;
    });

  const [content, setContent] = useState('second');

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
    <div id='IndustryConfirmContent'>
      <IndustryHeader title={props.title} sub={props.sub} />
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

      <h1>{matchedItem.name}</h1>
      <img src={matchedItem.img} alt="" />
      </div>
    </div>
  );
};

export default IndustryConfirmContent;
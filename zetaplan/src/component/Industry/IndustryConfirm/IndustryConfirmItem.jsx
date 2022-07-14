import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../../../css/Indusrty/industryConfirm.css';

const IndustryConfirmItem = ({data}) => {
  const navigate = useNavigate();

  const goToContent = (id) => {
    navigate(`/IndustryConfirm/${id}`)
  }

  return (
    <button id='IndustryConfirmItem' onClick={goToContent(data.id)}>
      <div className='industry-confirm-list-img'>
        <img src={data.img} alt="" />
      </div>
      <span className='industry-confirm-list-title'>{data.name}</span>
    </button>
  );
};

export default IndustryConfirmItem;
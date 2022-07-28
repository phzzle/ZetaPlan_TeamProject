import React, { useState } from 'react';
import './../../css/Company/companyman_accodion.css';
import CompanyManModal from './CompanyManModal';

const CompanyManAcco = ({item}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = (e) => {
    setIsOpen(true);
  };

  return (
    <div className="accordion__manpower" >
      <div className="accordion__profile" onClick={onClickButton}>
        <img src={item.thumnail} alt="이미지" />
        <h4>{item.name}</h4>
      </div>
      { isOpen && <CompanyManModal onClose={() => setIsOpen(false)} open={isOpen} item={item} />}
    </div>
  );
};

export default CompanyManAcco;
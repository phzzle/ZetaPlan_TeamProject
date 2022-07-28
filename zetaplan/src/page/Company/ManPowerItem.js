import React from 'react';
import '../../css/Company/CompanyManpower.css';
import { VscClose } from 'react-icons/vsc';
import { useState } from 'react';

const ManPowerItem = ({ item, boxMargin, setContents, setModalOpen, setBoxMargin, lineNum }) => {
  // const [isOn, setIsOn] = useState(false);
  // const [boxMargin, setBoxMargin] = useState('0');
  const showBox = (e) => {
    setModalOpen(true);
    setBoxMargin((230*(lineNum+1))+(280*(lineNum)));
    e.currentTarget.style.marginBottom = '280px'
    setContents(item);
  };

  return (
    <ul className='manpower-box' onClick={e => showBox(e)}>
      <li className='manpower-image'>
        <span className='item-name'>{item.name}</span>
        <span className='item-position'>{item.position}</span>
        <div className='manpower-image-cover'>
          <img src={item.thumnail} alt='' />
        </div>
      </li>
    </ul>
  );
};

export default ManPowerItem;

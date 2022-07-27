import React from 'react';
import '../../css/Company/CompanyManpower.css';
import { VscClose } from 'react-icons/vsc';
import { useState } from 'react';

const ManPowerItem = ({ item }) => {
  const [isOn, setIsOn] = useState(false);
  const showBox = () => {
    setIsOn((isOn) => !isOn);
  };
  /*   console.log(item); */
  return (
    <ul className='manpower-box'>
      <li className='manpower-image' onClick={showBox}>
        <span className='item-name'>{item.name}</span>
        <span className='item-position'>{item.position}</span>
        <div className='manpower-image-cover'>
          <img src={item.thumnail} alt='' />
        </div>
      </li>
      <div className={isOn ? `ex-box on` : `ex-box off`}>
        {/*         <div className='ex-box'> */}
        <div className='ex-inner-box'>
          <div className='ex-name'>
            <h5>
              <span className='item-name2'>{item.name}</span> &nbsp;
              <span className='item-position2'>{item.position}</span>
            </h5>
            <button>
              <VscClose className='close-icon' size='40px' onClick={showBox} />
            </button>
          </div>
          <div className='ex-sentence'>
            <div className='sentence-text'>
              <p className='item-detail'>{item.detail}</p>
              <br></br>
              <p className='item-subposition'>{item.subposition}</p>
            </div>
          </div>
        </div>
      </div>
      {/*       </div> */}
    </ul>
  );
};

export default ManPowerItem;

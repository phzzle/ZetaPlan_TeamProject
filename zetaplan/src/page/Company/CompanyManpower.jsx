import CompanyHeader from '../../component/Detail/CompanyHeader';
import DetailFooter from '../../component/Detail/DetailFooter';
import '../../css/Company/CompanyManpower.css';
import React, { useState, useEffect } from 'react';
import ManPowerItem from './ManPowerItem';
import ManpowerModal from './ManpowerModal';

const CompanyManpower = ({ title, sub }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch('/data/manPower.json')
      .then((response) => response.json())
      .then((response) => setList(response));
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [boxMargin, setBoxMargin] = useState('0');
  const [contents, setContents] = useState(''); 
  const manPower = list.map((item, idx) => {
    return <div className='manpower-container'>
      <ManPowerItem 
        key={item.id} 
        item={item}
        boxMargin={boxMargin}
        setContents={setContents}
        setModalOpen={setModalOpen}
        setBoxMargin={setBoxMargin}
        lineNum={Math.floor(idx/4)}
      />
    </div>;
  });
  console.log(boxMargin)

  return (
    <div>
      <CompanyHeader title={title} sub={sub} />
      <div id='SubInner'>
        <div className='company-title-container'>
          <h2 className='company-title'>Manpower</h2>
          <div className='company-title-line'></div>
        </div>
        <div className='manpower-outbox'>
          {manPower} {/* manPower.js 파일 삽입 */}
          {contents&&<ManpowerModal 
            contents={contents}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            boxMargin={boxMargin}
          />}
        </div>
      </div>
      <DetailFooter />
    </div>
  );
};

export default CompanyManpower;

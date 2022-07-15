import React from 'react';
import { useParams } from 'react-router-dom';
import AbroadHeader from './../../component/Detail/AbroadHeader';
import DetailFooter from '../../component/Detail/DetailFooter';
import AbroadSupport1 from '../../component/Abroad/AbroadSupport/AbroadSupport1';
import AbroadSupport2 from '../../component/Abroad/AbroadSupport/AbroadSupport2';
import AbroadSupport3 from '../../component/Abroad/AbroadSupport/AbroadSupport3';
import AbroadSupport4 from '../../component/Abroad/AbroadSupport/AbroadSupport4';
import AbroadSupport5 from '../../component/Abroad/AbroadSupport/AbroadSupport5';
import AbroadSupport6 from '../../component/Abroad/AbroadSupport/AbroadSupport6';
import AbroadSupport7 from '../../component/Abroad/AbroadSupport/AbroadSupport7';
import AbroadSupport8 from '../../component/Abroad/AbroadSupport/AbroadSupport8';

const AbroadCaseDetail = () => {
  let {id} = useParams();
  let supportItems = [
    <AbroadSupport1 />,
    <AbroadSupport2 />,
    <AbroadSupport3 />,
    <AbroadSupport4 />,
    <AbroadSupport5 />,
    <AbroadSupport6 />,
    <AbroadSupport7 />,
    <AbroadSupport8 />
  ]

  return (
    <div>
      <AbroadHeader title="Abroad" sub="해외진출 지원" />
      
      <div id="SubInner">
        {
          supportItems[id]
        }
      </div>

      <DetailFooter />
    </div>
  );
};

export default AbroadCaseDetail;
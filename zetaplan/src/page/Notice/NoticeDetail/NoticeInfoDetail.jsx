/* 컨설팅 실적 디테일 */

import React from 'react';
import DetailFooter from '../../../component/Detail/DetailFooter';
import NoticeHeader from '../../../component/Detail/NoticeHeader';
/* import { useState, useEffect } from 'react'; */
import '../NoticeList.css';
import { useParams } from 'react-router-dom';
/* import { useNavigate } from 'react-router-dom'; */

const NoticeInfoDetail = ({ infoData }) => {
  let { id } = useParams();

  return (
    <div>
      <NoticeHeader title="Notice" sub="컨설팅 실적" />
      <div id='NoticeInfoDetail'>
        <div id='SubInner'>
          <div className='company-title-container'>
            <h2 className='company-title'>컨설팅 실적 세부페이지</h2>
          </div>
          <div className='detail-container'>
            <table>
              <thead>
                <tr>
                  <th>{infoData[id - 1].title}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='detail-container-header-content'>
                    <div>
                      <span className='detail-container-header-view'>
                        조회수 :{infoData[id - 1].view}
                      </span>
                      <span className='detail-container-header-author'>
                        작성자 :{infoData[id - 1].author}
                      </span>
                    </div>
                    <div>
                      <span className='detail-container-header-date'>
                        {infoData[id - 1].date}
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <td>{infoData[id - 1].content}</td>
                  </td>
                </tr>
                <tr>
                  <td>다음글</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
        <DetailFooter />
      </div>
    </div>
  );
};

export default NoticeInfoDetail;

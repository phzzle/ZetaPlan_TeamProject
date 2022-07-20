/* 뉴스 디테일*/

import React from 'react';
import DetailFooter from '../../../component/Detail/DetailFooter';
import NoticeHeader from '../../../component/Detail/NoticeHeader';
import '../NoticeList.css';
import { useParams } from 'react-router-dom';

const NoticeNewsDetail = ({ title, sub, newsData }) => {
  let { id } = useParams();
  return (
    <div>
      <NoticeHeader title={title} sub={sub} />
      <div id='NoticeNewsDetail'>
        <div id='SubInner'>
          <h2 className='notice-title'>뉴스 세부페이지</h2>
          <div className='detail-container'>
            <table>
              <thead>
                <tr>
                  <th>{newsData[id - 1].title}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='detail-container-header-content'>
                    <div>
                      <span className='detail-container-header-view'>
                        조회수 :{newsData[id - 1].view}
                      </span>
                      <span className='detail-container-header-author'>
                        작성자 :{newsData[id - 1].author}
                      </span>
                    </div>
                    <div>
                      <span className='detail-container-header-date'>
                        {newsData[id - 1].date}
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <td>{newsData[id - 1].content}</td>
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

export default NoticeNewsDetail;

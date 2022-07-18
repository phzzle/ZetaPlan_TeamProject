import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import IndustryHeader from '../../component/Detail/IndustryHeader';
import IssueList from '../../component/Industry/Issue/IssueList';

const IndustryIssue = ({title, sub}) => {
  return (
    <div id = 'IndustryIssue'>
      <IndustryHeader title={title} sub={sub} />
      <div className="sub-inner">
      <div className="company-title-container">
          <h2 className='company-title'>산업별이슈</h2>
          <div className='company-title-line'></div>
        </div>
        <IssueList />
      </div>
      <DetailFooter />
    </div>
  );
};

export default IndustryIssue;
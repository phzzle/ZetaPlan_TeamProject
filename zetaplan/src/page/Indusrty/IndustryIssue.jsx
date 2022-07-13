import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import IndustryHeader from '../../component/Detail/IndustryHeader';
import IssueList from './IndustryIssue/IssueList';


const IndustryIssue = ({title, sub}) => {
  return (
    <div id = 'IndustryIssue'>
      <IndustryHeader title={title} sub={sub} />
      <div className="sub-inner">
        <IssueList />
      </div>
      <DetailFooter />
    </div>
  );
};

export default IndustryIssue;
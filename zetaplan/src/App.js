import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Fullpage from './component/Fullpage/Fullpage';
import CompanyInfo from './page/Company/CompanyInfo';
import CompanyCi from './page/Company/CompanyCi';
import CompanyManpower from './page/Company/CompanyManpower';
import CompanyCollabo from './page/Company/CompanyCollabo';
import CompanyHistory from './page/Company/CompanyHistory';
import CompanyRoad from './page/Company/CompanyRoad';
import MA from './page/MnAIpo/MA';
import MASummary from './page/MnAIpo/MASummary';
import MAResult from './page/MnAIpo/MAResult';
import MAProcess from './page/MnAIpo/MAProcess';
import Ipo from './page/MnAIpo/Ipo';
import IpoSummary from './page/MnAIpo/IpoSummary';
import IpoResult from './page/MnAIpo/IpoResult';
import IpoProcess from './page/MnAIpo/IpoProcess';
import InvestSummary from './page/Invest/InvestSummary';
import InvestPlan from './page/Invest/InvestPlan';
import InvestStrategy from './page/Invest/InvestStrategy';
import InvestEmpowerment from './page/Invest/InvestEmpowerment';
import InvestProcess from './page/Invest/InvestProcess';
import AbroadInfo from './page/Abroad/AbroadInfo';
import AbroadCase from './page/Abroad/AbroadCase';
import AbroadProcess from './page/Abroad/AbroadProcess';
import IndustryIssue from './page/Indusrty/IndustryIssue';
import IndustrySupport from './page/Indusrty/IndustrySupport';
import IndustryConfirm from './page/Indusrty/IndustryConfirm';
import IndustryTransfer from './page/Indusrty/IndustryTransfer';
import IndustryTrade from './page/Indusrty/IndustryTrade';
import IndustryValue from './page/Indusrty/IndustryValue';
import IndustryCredit from './page/Indusrty/IndustryCredit';
import Notice from './page/Notice/Notice';
import NoticeNews from './page/Notice/NoticeNews';
import NoticeColumn from './page/Notice/NoticeColumn';
import NoticeInfo from './page/Notice/NoticeInfo';
import NoticeInquiry from './page/Notice/NoticeInquiry';
import NoticeRequest from './page/Notice/NoticeRequest';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Fullpage />} />
            <Route path='/company' element={<CompanyInfo title="Company" sub="기업소개" />} />
            <Route path='/company/ci' element={<CompanyCi title="Company" sub="CI" />} />
            <Route path='/company/manpower' element={<CompanyManpower title="Company" sub="Manpower" />} />
            <Route path='/company/collabo' element={<CompanyCollabo title="Company" sub="협력기관" />} />
            <Route path='/company/history' element={<CompanyHistory title="Company" sub="연혁" />} />
            <Route path='/company/road' element={<CompanyRoad title="Company" sub="오시는길" />} />
            <Route path='/mna' element={<MA title="M&A/IPO" sub="M&A" />} />
            <Route path='/mna/summary' element={<MASummary title="M&A" sub="M&A 개요" />} />
            <Route path='/mna/result' element={<MAResult title="M&A" sub="M&A 성과" />} />
            <Route path='/mna/process' element={<MAProcess title="M&A" sub="M&A 컨설팅 과정" />} />
            <Route path='/ipo' element={<Ipo title="M&A/IPO" sub="IPO" />} />
            <Route path='/ipo/summary' element={<IpoSummary title="IPO" sub="IPO 개요" />} />
            <Route path='/ipo/result' element={<IpoResult title="IPO" sub="IPO 성과" />} />
            <Route path='/ipo/process' element={<IpoProcess title="IPO" sub="IPO 컨설팅 과정" />} />
            <Route path='/invest' element={<InvestSummary title="Invest" sub="투자개요/사례" />} />
            <Route path='/invest/plan' element={<InvestPlan title="Invest" sub="사업계획서/IR" />} />
            <Route path='/invest/strategy' element={<InvestStrategy title="Invest" sub="전략수립" />} />
            <Route path='/invest/empowerment' element={<InvestEmpowerment title="Invest" sub="역량강화" />} />
            <Route path='/invest/process' element={<InvestProcess title="Invest" sub="투자 컨설팅 과정" />} />
            <Route path='/abroad' element={<AbroadInfo title="Abroad" sub="해외 지사 소개" />} />
            <Route path='/abroad/case' element={<AbroadCase title="Abroad" sub="해외 진출 사례" />} />
            <Route path='/abroad/process' element={<AbroadProcess title="Abroad" sub="해외진출 컨설팅" />} />
            <Route path='/industry' element={<IndustryIssue title="Industry" sub="산업 별 이슈" />} />
            <Route path='/industry/support' element={<IndustrySupport title="Industry" sub="지원 사업" />} />
            <Route path='/industry/confirm' element={<IndustryConfirm title="Industry" sub="기업/기술 인증" />} />
            <Route path='/industry/transfer' element={<IndustryTransfer title="Industry" sub="기술 이전" />} />
            <Route path='/industry/trade' element={<IndustryTrade title="Industry" sub="기술 거래" />} />
            <Route path='/industry/value' element={<IndustryValue title="Industry" sub="가치 평가" />} />
            <Route path='/industry/credit' element={<IndustryCredit title="Industry" sub="신용 평가" />} />
            <Route path='/notice' element={<Notice title="Notice" sub="공지사항" />} />
            <Route path='/notice/news' element={<NoticeNews title="Notice" sub="뉴스" />} />
            <Route path='/notice/support' element={<NoticeColumn title="Notice" sub="기업지원정보" />} />
            <Route path='/notice/info' element={<NoticeInfo title="Notice" sub="컨설팅 실적" />} />
            <Route path='/notice/inquiry' element={<NoticeInquiry title="Notice" sub="문의하기" />} />
            <Route path='/notice/request' element={<NoticeRequest title="Notice" sub="상담신청" />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

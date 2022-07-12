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
            <Route path='/company' element={<CompanyInfo />} />
            <Route path='/company/ci' element={<CompanyCi />} />
            <Route path='/company/manpower' element={<CompanyManpower />} />
            <Route path='/company/collabo' element={<CompanyCollabo />} />
            <Route path='/company/history' element={<CompanyHistory />} />
            <Route path='/company/road' element={<CompanyRoad />} />
            <Route path='/mna' element={<MA />} />
            <Route path='/mna/summary' element={<MASummary />} />
            <Route path='/mna/result' element={<MAResult />} />
            <Route path='/mna/process' element={<MAProcess />} />
            <Route path='/ipo' element={<Ipo />} />
            <Route path='/ipo/summary' element={<IpoSummary />} />
            <Route path='/ipo/result' element={<IpoResult />} />
            <Route path='/ipo/process' element={<IpoProcess />} />
            <Route path='/invest' element={<InvestSummary />} />
            <Route path='/invest/plan' element={<InvestPlan />} />
            <Route path='/invest/strategy' element={<InvestStrategy />} />
            <Route path='/invest/empowerment' element={<InvestEmpowerment />} />
            <Route path='/invest/process' element={<InvestProcess />} />
            <Route path='/abroad' element={<AbroadInfo />} />
            <Route path='/abroad/case' element={<AbroadCase />} />
            <Route path='/abroad/process' element={<AbroadProcess />} />
            <Route path='/industry' element={<IndustryIssue />} />
            <Route path='/industry/support' element={<IndustrySupport />} />
            <Route path='/industry/confirm' element={<IndustryConfirm />} />
            <Route path='/industry/transfer' element={<IndustryTransfer />} />
            <Route path='/industry/trade' element={<IndustryTrade />} />
            <Route path='/industry/value' element={<IndustryValue />} />
            <Route path='/industry/credit' element={<IndustryCredit />} />
            <Route path='/notice' element={<Notice />} />
            <Route path='/notice/news' element={<NoticeNews />} />
            <Route path='/notice/column' element={<NoticeColumn />} />
            <Route path='/notice/info' element={<NoticeInfo />} />
            <Route path='/notice/inquiry' element={<NoticeInquiry />} />
            <Route path='/notice/request' element={<NoticeRequest />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import './fullpage.css';
import MainFullpage from './../MainFullpage/MainFullpage';
import MainFullpageNews from './../MainFullpage/MainFullpageNews/MainFullpageNews';
import MainFullPageAbroad from '../MainFullpage/MainFullPageAbroad/MainFullPageAbroad';
import MainFullpageInfo from '../MainFullpage/MainFullpageInfo/MainFullpageInfo';
import MainFullPageFooter from './../MainFullpage/MainFullPageFooter/MainFullPageFooter';

export default class Fullpage extends React.Component {
  render() {
    return (
      <FullPage controls controlsProps={{className: 'fullpage-paging'}}>
        <Slide>
          <MainFullpage />
        </Slide>
        <Slide>
          <MainFullpageInfo />
        </Slide>
        <Slide>
          <MainFullPageAbroad />
        </Slide>
        <Slide>
          <MainFullpageNews />
        </Slide>
        <Slide>
          <MainFullPageFooter />
        </Slide>
        <Slide>
          <h1>페이지</h1>
        </Slide>
        <Slide>
          <h1>페이지</h1>
        </Slide>
        <Slide>
          <h1>페이지</h1>
        </Slide>
      </FullPage>
    );
  }
}
import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import './fullpage.css';

export default class Fullpage extends React.Component {
  render() {
    return (
      <FullPage controls controlsProps={{className: 'fullpage-paging'}}>
        <Slide>
          <h1>페이지</h1>
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
        <Slide>
          <h1>페이지</h1>
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
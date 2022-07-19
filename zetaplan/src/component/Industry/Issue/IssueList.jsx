import React from 'react';
import { useState, useEffect}  from "react";
import Pagination from './Pagination';
import './issueList.css';


const IssueList = () => {
    const [ lists, setLists ] = useState([]);
    const LIST_PER_PAGE = 20 ; // 한장에 보여질 리스트 수 
    const [ page, setPage ] = useState(1) // 페이지 
    const startNum = (page - 1 ) * LIST_PER_PAGE ;  // 0 10 20 30
    const endNum = startNum + LIST_PER_PAGE ;  // 10 20 30 40 

    useEffect(()=>{
        fetch('/data/government.json')
        .then((res) => res.json())
        .then((data)=> setLists(data)); 
       /*  setLists(data); */
       console.log(lists);
    },[])

    return (
     <div className='list-box'>
        <div className='board-lists title'>
              <span className='id-name'>번호</span>
              <span className='list-title'>제목</span>
              <span className='list-author'>작성자</span>
              <span className='list-date'>날짜</span>
              <span className='list-view'>조회수</span>
        </div>
         <ul className='issue-list'>
                {[...lists]
                    .reverse()
                    .slice(startNum,endNum)
                    .reverse()
                    .map(({ num, title, author, date, view})=>{
                            return (
                                <li key={num}>
                                    <span className='id-name'>{num}</span> 
                                    <span className='list-title'>{title}</span>
                                    <span className='list-author'>{author}</span>
                                    <span className='list-date'>{date}</span>
                                    <span className='list-view'>{view}</span>
                                 </li>
                           );
                    })
                    
                }
        </ul>
             <a href="/login">
              <button className="login-button">LogIn</button>
            </a>
             <Pagination 
                total={lists.length} 
                page={page} 
                setPage={setPage} 
                LIST_PER_PAGE={LIST_PER_PAGE}
             />
        </div>
    );
};

export default IssueList;


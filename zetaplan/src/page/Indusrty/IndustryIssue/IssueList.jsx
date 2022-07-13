import React from 'react';
import { useState, useEffect}  from "react";
import Pagination from './Pagination';
import './issueList.css';




const IssueList = () => {
    const [lists,setLists] = useState([]);
    const LIST_PER_PAGE = 10 ; // 한장에 보여질 리스트 수 
    const [page, setPage] = useState(1) // 페이지 
    const startNum = (page - 1 ) * LIST_PER_PAGE ;  // 0 10 20 30
    const endNum = startNum + LIST_PER_PAGE ;  // 10 20 30 40 

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data)=> setLists(data))
    },[])

    return (
        <div className='list-box'>
             <h2 className='list-name'>게시물 목록</h2>
             <ul className='issue-list'>
                {

                    [...lists].reverse().slice(startNum,endNum).map(({id,title,body})=>{
                            return (
                                <li key={id}>
                                    <span className='id-name'>{id}</span> 
                                    <span className='list-body'>{body}</span>
                                 </li>
                           )
                    })
                    
                }
             </ul>
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


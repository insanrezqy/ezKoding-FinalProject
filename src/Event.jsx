import React, { useState, useEffect } from 'react';
import ListEvent from './component/ListEvent';

function Event() {
    const [listTask, setListTask] = useState([]);
    
    const fetchListData = () => {
        fetch('https://json-server-two-sandy.vercel.app/data?_limit=3&JudulAcara_like=Ngab')
          .then(response => {
            return response.json()
          })
          .then(data => {
            setListTask(data)
          })
    }

    useEffect(()=>{
        fetchListData();
      },[]);

    return(
        <div className='container'>
            <ListEvent items={listTask} />
        </div>
    )
}

export default Event
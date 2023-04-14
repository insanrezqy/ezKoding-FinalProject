import React, { useState, useEffect } from 'react';
import ListData from './component/ListData';

function Home() { 
  const [listTask, setListTask] = useState([]);
  const [keyword, setkeyword] = useState('');   

  const handleChange = (e) => {
    setkeyword(e.target.value);
  }

  const key = keyword;
  console.log(key);

  const fetchListData = (props) => {
    fetch('https://json-server-two-sandy.vercel.app/data?_limit=3&JudulAcara_like='+props)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setListTask(data)
      })
  }

  useEffect(()=>{
    fetchListData(key);
  },[]);

  return (
    <>
      <section id='Event-section' className='mt-6'>
      <div id='container' className='container mt-20'>
      <input id='search' type='text' className='border border-teal-500 px-2 py-2 rounded-md mb-4 mt-6 w-80 hidden' placeholder='Search' value={keyword} onChange={handleChange}></input>
        <div id='row' className='flex justify-center'>
          <div id='col-lg-8' className='flex-[0_0_50%] max-w-[66%] relative w-full pr-16 pl-16'>
            <ListData items={listTask}/>
          </div>
        </div>
      </div>
      </section>
      <section id='Rekomendasi-Event-section' className='mt-6'>
        <div className='container'>
        </div>
      </section>
    </>
  );
}

export default Home;
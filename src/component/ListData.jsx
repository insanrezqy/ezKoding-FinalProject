import React from 'react';
import { Link } from "react-router-dom";

function ListData(props) {
  return (
    <div id='card' className='flex flex-wrap gap-9'>
    {
      props.items.map(item =>
      {
        return (      
          <Link key={item.Id} to='/Event'>
          <div id='event' className='flex w-full gap-10 items-center rounded-3xl bg-white'>
            <div id='col-5' className='flex-[0_0_41%] max-w-[41%] p-0'>
              <div id='banner' className='w-fulls'>
                <img src={item.Gambar} alt={item.Id} className='gap-14'></img>
              </div>
            </div>
            <div id='col-7' className='flex-[0_0_58%] max-w-[58%] pl-0'>                  
              <div id='detail-acara' className='p-0'>
                <div id='nama-acara' className='pr-24'>
                  <h4 className='text-black'>{item.JudulAcara}</h4>
                </div>
                <div id='tgl-acara' className='flex items-center gap-2 pt-4 pb-4'>
                  <img src='https://www.freeiconspng.com/uploads/calendar-icon-15.png' width='25px' alt=''></img>
                  <label className='text-black'>{item.Tanggal}</label>
                </div>
                <div id='lokasi-acara' className='flex items-center gap-2 pt-4 pb-4'>
                  <img src='https://www.freeiconspng.com/uploads/blue-location-icon-png-19.png' width='25px' alt=''></img>
                  <label className='text-black'>{item.Lokasi}</label>
                </div>
              </div>
            </div>
          </div> 
          </Link>               
        )
      })
    }
    </div>
        
  );
}

export default ListData;
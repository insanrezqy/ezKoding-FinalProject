import React from 'react';

function ListEvent(props) {
    return(
        <div>
            {
                props.items.map(item => 
                    {
                        return(
                            <div>
                                <section id='event-info' className='mt-6'>
                                    <div id='row' className='flex flex-wrap'>
                                        <div id='col-lg-8' className='flex-[0_0_50%] max-w-[66%] relative w-full pr-16 pl-16'>
                                            <div id='detail-event' className='bg-white rounded-3xl p-3 min-h-[416px]'>
                                                <div id='event-banner' className='p-3'>
                                                    <img src='https://artatix.co.id/img/event_banner/E679A796-6434-41DF-BC32-B905629C7A22%20-%20FIRDAUSI%20CHANNEL.png'></img>
                                                </div>
                                                <div id='category' className='py-1 px-3'>
                                                    <span className='text-xs font-medium text-blue-800 rounded-lg bg-yellow-500 py-1 px-3'>Musik</span>
                                                </div>
                                                <div id='Event-Name' className='p-2'>
                                                    <h3>{item.JudulAcara}</h3>
                                                </div>
                                            </div>
                                        </div>                    
                                        <div id='card-info' className='flex-[0_0_34%] max-w-[34%]'>
                                            <div className='flex flex-col p-3 bg-white rounded-3xl h-full justify-between'>
                                                <div id='detail-info'>
                                                    <div id='creator'>
                                                        <div id='creator-img' className='rounded-3xl'>
                                                            <img src="" alt="" />
                                                        </div>
                                                        <div id='creator-name' className='flex flex-col rounded-3xl'>
                                                            <label id='name' for>Penyelenggara</label>
                                                            <span>{item.Penyelenggara}</span>
                                                        </div>
                                                    </div>
                                                    <hr className='border-dashed border-t-2 my-2.5 mx-3 text-slate-400'></hr>
                                                    <div id='calendar' className='flex flex-row rounded-3xl'>
                                                        <div id='calendar-icon' className='bg-white rounded-lg w-6 h-6 text-center'>
                                                            <img src='https://www.freeiconspng.com/uploads/calendar-icon-15.png' width='30px'></img>
                                                        </div>
                                                        <div id='calendar-text' className='flex flex-col px-3'>
                                                            <label for>Tanggal</label>
                                                            <span className='text-lg font-semibold text-black py-2'>{item.Tanggal}</span>
                                                        </div>
                                                    </div>
                                                    <div id='time' className='flex flex-row rounded-3xl'>
                                                        <div id='time-icon' className='bg-white rounded-lg w-6 h-6 text-center'>
                                                            <img src='https://www.freeiconspng.com/uploads/time-and-date-clock-icon--ios-7-iconset--icons8-3.png' width='30px'></img>
                                                        </div>
                                                        <div id='time-text' className='flex flex-col px-3'>
                                                            <label for>Waktu</label>
                                                            <span className='text-lg font-semibold text-black py-2'>{item.Jam}</span>
                                                        </div>
                                                    </div>
                                                    <div id='location' className='flex flex-row rounded-3xl'>
                                                        <div id='location-icon' className='bg-white rounded-lg w-6 h-6 text-center'>
                                                            <img src='https://www.freeiconspng.com/uploads/blue-location-icon-png-19.png' width='30px'></img>
                                                        </div>
                                                        <div id='location-text' className='flex flex-col px-3'>
                                                            <label for>Lokasi</label>
                                                            <span className='text-lg font-semibold text-black py-2'>{item.Lokasi}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section id='event-desc' className='mb-6 '>
                                    <div id='row' className='flex flex-wrap'>
                                        <div id='col-md-8' className='flex-[0_0_66%] max-w-[66%] pr-16 pl-16'>
                                            <div id='description' className='bg-white rounded-3xl p-3 w-auto'>
                                                <div id='desc-tab' className='rounded-3xl'>
                                                    <div id='desc-tab-content' >
                                                        <div id='desc-text'>
                                                            <p>{item.Deskripsi}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                            </div>
                        );
                    })
            }
        </div>
    )
}

export default ListEvent
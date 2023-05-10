import React, { useState } from 'react';
import allData from './heliverse_mock_data.json';

const HomeComponent = () => {
    const [data, setData] = useState(allData.slice(0,20)); 
    const [current, setCurrent] = useState(1); 

    // const forPagination = Math.ceil(allData.length / 20);

    const handlePrevious = () =>{
        setCurrent(current - 1);
        setData();
        
    }
    const handleNext = () =>{
        setCurrent(current + 1); 
    }
    console.log(current); 
    return (
        <div>
            <div className='grid grid-cols-1 gap-4 mt-4 lg:grid-cols-4 md:grid-cols-2'>
                {
                    data.map(singleData => <div className="bg-blue-300 shadow-xl w-80 card md:w-64 lg:w-72">
                        <div className="p-2">
                            <div className="flex items-center card-actions">
                                <div className="avatar">
                                    <div className="w-16 border border-red-500 rounded-full">
                                        <img src="https://robohash.org/sintessequaerat.png?size=50x50&set=set1" />
                                    </div>
                                </div>
                                <div>
                                    <h1>{singleData?.first_name + " " + singleData?.last_name}</h1>
                                    <p>{singleData?.email.slice(0, 20)}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }


            </div>

            <div className='flex justify-center my-4'>

                <div className="btn-group">
                    <button onClick={handlePrevious} className="btn" disabled={current == 1}>«</button>
                    <button className="btn">Page {current}</button>
                    <button onClick={handleNext} className="btn" disabled={current == 50}>»</button>
                </div>

                {/* <div className="btn-group ">
                    {
                        [...Array(forPagination).keys()].map((btn, index) => <button className="btn">{index}</button>)
                    }
                </div> */}
            </div>

        </div>
    );
};

export default HomeComponent;
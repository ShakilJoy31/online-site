import { useState } from 'react';
import FoodProductStyle from '../pages/CSSfile/FoodProductStyle.module.css';

const ReferralReports = () => {
    const [level1, setLevel1] = useState(true);
    const [level2, setLevel2] = useState(false);
    const [level3, setLevel3] = useState(false);
    return (
        <div className='mx-2 mt-4 pb-36 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0'>
            <h1 className='my-6 ml-2 text-3xl text-black'>Referral Reports</h1>
            <h1 className='flex justify-center mb-3 text-2xl'>My Referral</h1>
            <div style={{
                borderRadius: '5px',
                backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
                }} className='flex'>

                <div onClick={()=>{setLevel1(true); setLevel2(false); setLevel3(false)}} className={`${level1 ? FoodProductStyle.newLevel : ''} w-full hover:cursor-pointer`}><p className='flex justify-center py-2 text-xl'>Level 1</p></div>

                <div  onClick={()=>{setLevel1(false); setLevel2(true); setLevel3(false)}} className={`${level2 ? FoodProductStyle.newLevel : ''} w-full hover:cursor-pointer`}><p className='flex justify-center py-2 text-xl'>Level 2</p></div>

                <div  onClick={()=>{setLevel1(false); setLevel2(false); setLevel3(true)}} className={`${level3 ? FoodProductStyle.newLevel : ''} w-full hover:cursor-pointer`}><p className='flex justify-center py-2 text-xl'>Level 3</p></div>

            </div>

            <div style={{
                    borderRadius: '5px',
                    backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                }} className="mt-4 overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th> <span className='flex justify-center'>User</span></th>
                            <th> <span className='flex justify-center'>Amount</span> </th>
                            <th> <span className='flex justify-center'>Time</span> </th>
                            <th> <span className='flex justify-center'>Status</span> </th>
                            <th> <span className='flex justify-center'>Date</span> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={`${FoodProductStyle.tableRow}`}>
                            <th> <span className='flex justify-center'>1</span> </th>
                            <td> <span className='flex justify-center'>Cy Ganderton</span> </td>
                            <td> <span className='flex justify-center'>Quality Control Specialist</span> </td>
                            <td> <span className='flex justify-center'>Blue</span> </td>
                            <td> <span className='flex justify-center'>Blue</span> </td>
                        </tr>
                        <tr className={`${FoodProductStyle.tableRow}`}>
                            <th> <span className='flex justify-center'>2</span></th>
                            <td> <span className='flex justify-center'>Hart Hagerty</span></td>
                            <td> <span className='flex justify-center'>Desktop Support Technician</span></td>
                            <td> <span className='flex justify-center'>Purple</span></td>
                            <td> <span className='flex justify-center'>Purple</span></td>
                        </tr>
                        <tr className={`${FoodProductStyle.tableRow}`}>
                            <th> <span className='flex justify-center'>3</span></th>
                            <td> <span className='flex justify-center'>Brice Swyre</span></td>
                            <td> <span className='flex justify-center'>Tax Accountant</span></td>
                            <td> <span className='flex justify-center'>Red</span></td>
                            <td> <span className='flex justify-center'>Red</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReferralReports;
import { useRouter } from 'next/router';
import FoodProductStyle from '../pages/CSSfile/FoodProductStyle.module.css';

const admin = () => {
    return (
        <div className='mx-2 mt-4 pb-36 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0'>
            <h1 className='my-6 ml-2 text-3xl text-black'>Admin Route</h1>
            <div style={{
                    borderRadius: '5px',
                    backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                }} className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th> <span className='flex justify-center'>SL</span></th>
                            <th> <span className='flex justify-center'>Name</span> </th>
                            <th> <span className='flex justify-center'>Amount</span> </th>
                            <th> <span className='flex justify-center'>Tr Id</span> </th>
                            <th> <span className='flex justify-center'>Actions</span> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={`${FoodProductStyle.tableRow}`}>
                            <th> <span className='flex justify-center'>1</span> </th>
                            <td> <span className='flex justify-center'>Shakil</span> </td>
                            <td> <span className='flex justify-center'>200</span> </td>
                            <td> <span className='flex justify-center'>Quality Control Specialist</span> </td>
                            <td> <div className='flex justify-center'>
                            <div className='items-center justify-between p-6 text-black rounded-sm'>
                                    <label style={{
                                        backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
                                        backgroundSize: "100%",
                                        backgroundRepeat: "repeat",
                                    }} className={`normal-case btn ${FoodProductStyle.paymentActionButtonDec} border-0 mr-4 text-black btn-sm`}>Decline
                                    </label>

                                    <label htmlFor="afterProceedModal" style={{
                                        backgroundImage: "linear-gradient(45deg ,#5D9C59, #3E54AC)",
                                        backgroundSize: "100%",
                                        backgroundRepeat: "repeat",
                                    }} className={`normal-case btn ${FoodProductStyle.paymentActionButton} border-0 text-white btn-sm`}>Accept
                                    </label>

                                </div>
                            </div> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default admin;
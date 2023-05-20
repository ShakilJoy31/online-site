import FoodProductStyle from '../pages/CSSfile/FoodProductStyle.module.css';

const WithdrawalReports = () => {
    return (
        <div className='mx-2 mt-4 pb-36 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0'>
            <h1 className='my-6 ml-2 text-3xl text-black'>Withdrawal Reports</h1>
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
                            <th> <span className='flex justify-center'>Time</span> </th>
                            <th> <span className='flex justify-center'>Wallet</span> </th>
                            <th> <span className='flex justify-center'>Amount</span> </th>
                            <th> <span className='flex justify-center'>Status</span> </th>
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

export default WithdrawalReports;
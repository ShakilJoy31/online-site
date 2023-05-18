import { useState } from 'react';
import FoodProductStyle from '../pages/CSSfile/FoodProductStyle.module.css';
// import { IoCopySharp } from 'react-icons/io';
const Deposit = () => {
    const [copiedAccountNumber, setCopiedAccountNumber] = useState(false);
    const handleCopyButton = () =>{
        const res = navigator.clipboard.writeText('TURk7snCjbfASWYx5XvDFnfDGXpSU8223e');
        setCopiedAccountNumber(true);
    }
    return (
        <div className='w-full min-h-screen pb-36 lg:mx-12 md:mx-8'>
            <h1 className='my-6 ml-2 text-3xl text-black '>Deposit</h1>
            <div className='mx-3 '>
                <div style={{
                    borderRadius: '5px',
                    backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                }} className="w-full card hover:shadow-2xl">
                    <div className="p-3 lg:p-6 md:p-4">
                        <div className='p-6 text-black bg-white rounded-sm'>
                            <div>
                                <p className="text-red-500">NOTE: DEPOSIT METHOD IS USDT-TRC20 ONLY</p>
                                <img className='block mx-auto my-4 w-28 h-28' src="https://chart.googleapis.com/chart?cht=qr&chl=TURk7snCjbfASWYx5XvDFnfDGXpSU8223e&chs=180x180&choe=UTF-8&chld=L|2" alt="" />

                                <div className={`${FoodProductStyle.customDivider}`}></div>

                                <p className='flex justify-center my-2 font-mono text-xl lg:text-2xl md:text-2xl'>Deposit Amount: 100$</p>

                                {/* font-serif */}

                                <div className={`${FoodProductStyle.customDivider}`}></div>

                                <div className='my-4'>
                                    <div>
                                        <div className="form-control">
                                            <div className="input-group">
                                                <input value='TURk7snCjbfASWYx5XvDFnfDGXpSU8223e' type="text" className="w-full text-white bg-purple-500 input focus:outline-none" />
                                                {
                                                    copiedAccountNumber ? <span onClick={handleCopyButton} style={{
                                                        backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                                                        backgroundSize: "100%",
                                                        backgroundRepeat: "repeat",
                                                    }} className='text-white cursor-pointer hover:text-red-600'>Copied</span> : <span onClick={handleCopyButton} style={{
                                                        backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                                                        backgroundSize: "100%",
                                                        backgroundRepeat: "repeat",
                                                    }} className='text-white cursor-pointer hover:text-red-600'>Copy</span>
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className={`${FoodProductStyle.customDivider}`}></div>
                                <p className='mt-2 text-xl'>Status: <span className='font-mono'>Pending</span></p>
                            </div>
                        </div>
                        <p className='my-4'>Note: Each wallet is valid only for one transaction. Do not send multiple deposits into the same wallet. One wallet per deposit.</p>
                        <div className='flex justify-center p-6 text-black bg-white rounded-sm'>
                            <label style={{
                                backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
                                backgroundSize: "100%",
                                backgroundRepeat: "repeat",
                            }} className={`normal-case btn ${FoodProductStyle.cancelPayment} border-0 text-xl text-black w-full lg:w-48 md:w-32 `}>Cancel
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deposit;
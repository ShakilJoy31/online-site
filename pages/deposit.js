import { useState, useEffect } from 'react';
import FoodProductStyle from '../pages/CSSfile/FoodProductStyle.module.css';
// import { IoCopySharp } from 'react-icons/io';
const Deposit = () => {
    const [copiedAccountNumber, setCopiedAccountNumber] = useState(false);
    const [copy, setCopy] = useState(false);
    const [amountToPay, setAmountToPay] = useState(0);
    useEffect(()=>{
        const amount = JSON.parse(localStorage.getItem('amount'));
        if(amount){
            setCopiedAccountNumber(true);
        }
    },[])
    const handleProceedPayment = () => {
        if(amountToPay > 0){
            setCopiedAccountNumber(true);
            localStorage.setItem('amount', JSON.stringify({amount: amountToPay}));
        }
        else{
            console.log("Enter amount.")
        }
    }
    return (
        <div>
            {
                copiedAccountNumber ? <div className='w-full min-h-screen pb-36 lg:mx-12 md:mx-8'>
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
                                    <img className='block mx-auto my-4 w-36 h-36' src="https://i.ibb.co/zswYgY3/Whats-App-Image-2023-05-21-at-11-01-15-PM.jpg" alt="" />
    
                                    <div className={`${FoodProductStyle.customDivider}`}></div>
    
                                    <p className='flex justify-center my-2 font-mono text-xl lg:text-2xl md:text-2xl'>Deposit Amount: $ { amountToPay == 0 ? (JSON.parse(localStorage.getItem('amount'))).amount : amountToPay}</p>
    
                                    {/* font-serif */}
    
                                    <div className={`${FoodProductStyle.customDivider}`}></div>
    
                                    <div className='my-4'>
                                        <div>
                                            <div className="form-control">
                                                <div className="input-group">
                                                    <input value='TR41ZFhesqyNDVXLFY7XePj65kz7EQ47CH' type="text" className="w-full text-white bg-purple-500 input focus:outline-none" />
                                                    {
                                                        !copy ? <span onClick={()=>{
                                                            navigator.clipboard.writeText('TR41ZFhesqyNDVXLFY7XePj65kz7EQ47CH')
                                                            setCopy(true); 

                                                        }} style={{
                                                            backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                                                            backgroundSize: "100%",
                                                            backgroundRepeat: "repeat",
                                                        }} className='text-white cursor-pointer hover:text-red-600'>Copy</span> : <span style={{
                                                            backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                                                            backgroundSize: "100%",
                                                            backgroundRepeat: "repeat",
                                                        }} className='text-white cursor-pointer hover:text-red-600'>Copied</span>
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
                                <label onClick={()=>{
                                    localStorage.removeItem('amount');
                                    setCopiedAccountNumber(false)
                                }} style={{
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
            :
            <div>
            <div className="mx-2 mt-4 pb-36 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0">
            <h1 className='my-6 ml-2 text-3xl text-black '>Deposit</h1>
            <div style={{
                borderRadius: '5px',
                backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
            }} className="w-full p-2 mb-4 lg:p-6 md:p-4 lg:mb-0 md:mb-0">
                <div>
                    <p className='text-black'>NOTE: DEPOSIT METHOD IS USDT-TRC20 ONLY</p>
                    <span className="my-2 font-mono text-xl">Amount (USD)</span>
                    <input onChange={(e)=>setAmountToPay(e.target.value)} type="number" className="w-full mt-2 text-white bg-purple-500 input focus:outline-none" />
                    <p className='my-2'>All deposits will be reflected on your portfolio after payments are confirmed.</p>
                    <label onClick={handleProceedPayment} style={{
                        backgroundImage: "linear-gradient(45deg ,#B71375, #6C9BCF)",
                        backgroundSize: "100%",
                        backgroundRepeat: "repeat",
                    }} className={`normal-case btn ${FoodProductStyle.moreFoodButton} border-0 text-xl text-white w-full lg:w-36 md:w-36 btn-sm mt-1`}>Proceed
                    </label>
                </div>
            </div>
        </div>
            </div>
            }
        </div>
    );
};

export default Deposit;
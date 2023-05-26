import { RiLuggageDepositFill } from 'react-icons/ri';
import FoodProductStyle from '../pages/CSSfile/FoodProductStyle.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { updateUserWithTrId } from '@/lib/healper';
import { getDataFromLocalStore } from './../getDataFromLocalStorage';

const Withdrawal = () => {
    const user = getDataFromLocalStore();
    const [walletAddress, setWalletAddress] = useState('');
    const [withdrawAbleBalance, setWithDrawableBalance] = useState(0);

    const tax = withdrawAbleBalance * (3/100);

    const newBalance = user?.restAmount ? user?.restAmount : (user?.amount + (user?.amountFromRefer ? user?.amountFromRefer : 0) + (user?.amountFromSecondRefer || 0) + (user?.amountFromThirdRefer || 0));
    
    const restAmount = newBalance - (withdrawAbleBalance + tax);
    
    console.log(user?.restAmount ? user?.restAmount : (user?.amount + (user?.amountFromRefer ? user?.amountFromRefer : 0) + (user?.amountFromSecondRefer || 0) + (user?.amountFromThirdRefer || 0)), withdrawAbleBalance);

    const handleWithDraw = () =>{
        if (walletAddress && withdrawAbleBalance) {
            updateUserWithTrId(user?._id, { withDrawAmount: withdrawAbleBalance, walletAddress: walletAddress, restAmount: restAmount}).then(res => console.log(res))
        }
    }
    return (
        <div className='mx-2 mt-4 pb-36 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0'>
            <h1 className='my-6 ml-2 text-3xl text-black'>Withdrawal</h1>
            <div className='grid w-full lg:justify-between md:justify-between gap-x-6 lg:flex md:flex lg:flex-row-reverse'>
                <div style={{
                    borderRadius: '5px',
                    backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                }} className='w-full h-24 p-4 mb-4 lg:h-40 md:h-36 lg:p-8 md:p-6 lg:mb-0 md:mb-0'>
                    <div className='flex items-center'>
                        <div style={{
                            padding: '10px',
                            borderRadius: '50%',
                            backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                            backgroundSize: "100%",
                            backgroundRepeat: "repeat",
                        }} className='mr-6'>
                            <span className=''><RiLuggageDepositFill size={25} color='Blue'></RiLuggageDepositFill></span>
                        </div>

                        <div>
                            <p className='text-xl'>Current Balance</p>
                            {
                                user?.isVerified ? <p className='text-2xl'>$ {user?.restAmount ? user?.restAmount : (user?.amount + (user?.amountFromRefer ? user?.amountFromRefer : 0) + (user?.amountFromSecondRefer || 0) + (user?.amountFromThirdRefer || 0))}</p> : <p className='text-2xl'>$ 00.00</p>
                            }
                        </div>
                    </div>

                </div>

                <div style={{
                    borderRadius: '5px',
                    backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                }} className="flex items-center w-full mb-4 lg:mb-0 md:mb-0">
                    <div className="w-full p-2 lg:p-6 md:p-4">
                    {
                ((user?.restAmount ? user?.restAmount : (user?.amount + (user?.amountFromRefer ? user?.amountFromRefer : 0) + (user?.amountFromSecondRefer || 0) + (user?.amountFromThirdRefer || 0))) < (withdrawAbleBalance + (withdrawAbleBalance * (3/100)))) ? <p className='flex justify-center p-3 mb-4 text-white bg-red-600 rounded-md'>UPPS! Insufficient Balance</p> : <p className='flex justify-center p-3 mb-4 text-white bg-blue-600 rounded-md'>Withdraw charge is 3%</p>
            }
                        <div className='w-full'>
                            <span className="">Amount (USD)</span>
                            <input onChange={(e)=>setWithDrawableBalance( parseFloat(e.target.value))} type="number" className="w-full mt-1 text-blue-600 bg-black input focus:outline-none" />
                        </div>

                        {/* <div className='w-full my-4'>
                            <span className="">Enter Payment Pin</span>
                            <input type="text" className="w-full mt-1 text-blue-600 bg-black input focus:outline-none" />
                        </div> */}

                        <div className='w-full my-4'>
                            <span className="">Wallet Address</span>
                            <input onChange={(e)=>setWalletAddress(e.target.value)} type="text" className="w-full mt-1 text-blue-600 bg-black input focus:outline-none" />
                        </div>

                        <div className='mb-4 mt-7'>
                            <label htmlFor='withDrawModal' onClick={handleWithDraw} style={{
                                backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
                                backgroundSize: "100%",
                                backgroundRepeat: "repeat",
                            }} className={`normal-case btn ${FoodProductStyle.foodCard} border-0 text-xl text-black w-full`} disabled={((user?.restAmount ? user?.restAmount : (user?.amount + (user?.amountFromRefer ? user?.amountFromRefer : 0) + (user?.amountFromSecondRefer || 0) + (user?.amountFromThirdRefer || 0))) < (withdrawAbleBalance + (withdrawAbleBalance * (3/100)))) || (!withdrawAbleBalance || !walletAddress)}>Withdraw
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
            <div>
                <input type="checkbox" id="withDrawModal" className="modal-toggle" />
                <label htmlFor="withDrawModal" className="cursor-pointer modal">
                <label style={{
                    borderRadius: '5px',
                    backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                }} className="relative modal-box" htmlFor="">
                            <h3 className="flex justify-center py-4 text-xl text-white">Wait for an admin to send ${withdrawAbleBalance} at {walletAddress}</h3>
                            <h3 className="flex justify-center pb-4 text-xl text-green-600">Thanks for your patience!</h3>

                        </label>
                </label>
            </div>
            </div>
        </div>
    );
};

export default Withdrawal;
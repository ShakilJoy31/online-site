import { RiLuggageDepositFill } from 'react-icons/ri';
import FoodProductStyle from '../pages/CSSfile/FoodProductStyle.module.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getUser } from '@/lib/healper';
import { getDataFromLocalStore } from './../getDataFromLocalStorage';

const Withdrawal = () => {
    const user = getDataFromLocalStore();
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
                                user?.isVerified ? <p className='text-2xl'>$ {user?.amount + (user?.amountFromRefer ? user?.amountFromRefer : 0)}</p> : <p className='text-2xl'>$ 00.00</p>
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
                        <div className='w-full'>
                            <span className="">Amount (USD)</span>
                            <input type="number" className="w-full mt-1 text-blue-600 bg-black input focus:outline-none" />
                        </div>

                        <div className='w-full my-4'>
                            <span className="">Enter Payment Pin</span>
                            <input type="text" className="w-full mt-1 text-blue-600 bg-black input focus:outline-none" />
                        </div>

                        <div className='w-full'>
                            <span className="">Wallet Address</span>
                            <input type="text" className="w-full mt-1 text-blue-600 bg-black input focus:outline-none" />
                        </div>

                        <div className='mt-10 mb-4'>
                            <label style={{
                                backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
                                backgroundSize: "100%",
                                backgroundRepeat: "repeat",
                            }} className={`normal-case btn ${FoodProductStyle.foodCard} border-0 text-xl text-black w-full`}>Withdraw
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Withdrawal;
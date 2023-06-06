import Link from 'next/link';
import { useEffect, useState } from 'react';
const Footer = () => {
    const [localStorageUser, setLocalStorageUser] = useState({});
    useEffect(() => {
        const localStorageSavedUser = JSON.parse(localStorage.getItem('savedUser'));
        if (localStorageSavedUser) {
            setLocalStorageUser(localStorageSavedUser);
        }
    }, [])
    return (
        <div style={{ background: "linear-gradient(45deg, #FEA1BF, #BFEAF5)" }} className="pb-10 lg:pb-0 md:pb-0">
            <footer class="footer p-10 Footer grid md:flex lg:flex justify-evenly text-base-content">
                <div className=''>
                    <span style={{
                        fontWeight: "700",
                        fontSize: "22px",
                        lineHeight: "41px",
                        color: "#11009E", 
                    }} class=" block mb-[20px] font-serif ">Trading Platform</span>
                    <p class="cursor-pointer font-serif  text-black">Minimum Deposit of 100 usdt</p>
                    <p class="cursor-pointer font-serif  text-black">Maximum Deposit 1,00,000 USD</p>
                    <p class="cursor-pointer font-serif  text-black">Stable profit (1--2%) every Day</p>
                    <p class="cursor-pointer font-serif  text-black">Guaranteed profit... (No loss)</p>
                </div>

                {/* Useful Links */}
                <div className=''>
                    <span style={{
                        color: '#61876E',
                        fontWeight: "700",
                        fontSize: "22px",
                        lineHeight: "41px",
                        color: "#11009E",
                    }} class=" mb-[20px] font-serif ">Level 3 Commission (One time)</span>
                    <a class="cursor-pointer font-serif  text-black">Investment locked 365 days...</a>
                    <Link href='/' class="cursor-pointer font-serif  text-black">Weekly 2 days off ( Saturday & Sunday)</Link>
                    <a class="cursor-pointer font-serif flex justify-center items-center  text-black">
                        <p className=''>Withdraw Every day 24 hours</p>
                    </a>
                    <a class="cursor-pointer font-serif  text-black">Minimum Withdrawal 20 usdt</a>
                    
                </div>


                <div className=''>
                    <span style={{
                        color: '#61876E',
                        fontWeight: "700",
                        fontSize: "22px",
                        lineHeight: "41px",
                        color: "#11009E",
                    }} class=" mb-[20px] font-serif">Lifetime Income Guaranteed</span>
                    <a class="cursor-pointer font-serif  text-black">Maximum withdrawal of 10000 usdt Daily</a>
                    <Link href='/' class="cursor-pointer font-serif  text-black">Withdrawal fee only 3%</Link>
                    <a class="cursor-pointer font-serif flex justify-center items-center  text-black">
                        <p className=''>Withdrawal to account within (1-- 24 hours)</p>
                    </a>
                    <a class="cursor-pointer font-serif  text-black">Payment methods: USDT TRC-20</a>
                    
                </div>

                {/* ml-2 md:ml-10 lg:ml-2 */}
                
            </footer>
        </div>




        // <div className="pb-10 lg:pb-0 md:pb-0">
        //     <footer style={{ background: "linear-gradient(45deg, #FF8E9E, #C0DEFF)" }} class="footer p-10 Footer grid md:flex lg:flex justify-around text-base-content">
        //         <div className=''>
        //             <span style={{
        //                 fontWeight: "700",
        //                 fontSize: "22px",
        //                 lineHeight: "41px",
        //                 color: "Black"
        //             }} class=" block mb-[20px]">Trading Platform</span>
        //             <p class="link link-hover  text-black">Minimum Deposit of 100 usdt</p>
        //             <p class="link link-hover  text-black">Maximum Deposit 1,00,000 USD</p>
        //             <p class="link link-hover  text-black">Stable profit (1--2%) every Day, Guaranteed profit... (No loss)</p>
        //         </div>

        //         {/* Useful Links */}
        //         <div className=''>
        //             <span style={{
        //                 color: '#61876E',
        //                 fontWeight: "700",
        //                 fontSize: "22px",
        //                 lineHeight: "41px",
        //                 color: "Black"
        //             }} class=" mb-[20px]">Level 3 Commission (One time)</span>
        //             <a class="link link-hover  text-black">Investment locked 365 days...</a>
        //             <Link href='/' class="link link-hover  text-black">Weekly 2 days off ( Saturday & Sunday)</Link>
        //             <a class="link link-hover flex justify-center items-center  text-black">
        //                 <p className=''>Withdraw Every day 24 hours</p>
        //             </a>
        //             <a class="link link-hover  text-black">Minimum Withdrawal 20 usdt</a>
                    
        //         </div>


        //         <div className=''>
        //             <span style={{
        //                 color: '#61876E',
        //                 fontWeight: "700",
        //                 fontSize: "22px",
        //                 lineHeight: "41px",
        //                 color: "Black"
        //             }} class=" mb-[20px]">Lifetime Income Guaranteed</span>
        //             <a class="link link-hover  text-black">Maximum withdrawal of 10000 usdt Daily</a>
        //             <Link href='/' class="link link-hover  text-black">Withdrawal fee only 3%</Link>
        //             <a class="link link-hover flex justify-center items-center  text-black">
        //                 <p className=''>Withdrawal to account within (1-- 24 hours)</p>
        //             </a>
        //             <a class="link link-hover  text-black">Payment methods: USDT TRC-20</a>
                    
        //         </div>

        //         {/* ml-2 md:ml-10 lg:ml-2 */}
                
        //     </footer>
        // </div>
    );
};

export default Footer;
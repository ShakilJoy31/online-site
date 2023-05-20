import { ImHome3 } from 'react-icons/im';
import { RiLuggageDepositFill } from 'react-icons/ri';
import { IoIosSettings } from 'react-icons/io';
import { AiOutlineLogout } from 'react-icons/ai';
import { useRouter } from 'next/router';
import FoodProductStyle from '../CSSfile/FoodProductStyle.module.css';
import { useState } from 'react';
const Sidebar = () => {
    const router = useRouter();
    const [home, setHome] = useState(false)
    const [deposit, setDeposit] = useState(false)
    const [profile, setProfile] = useState(false)
    const handleHome = () =>{
        router.push('/dashboard');
        setDeposit(false);
        setHome(true);
        setProfile(false);
    }
    const handleDeposit = () =>{
        router.push('/deposit');
        setDeposit(true);
        setHome(false);
        setProfile(false);
    }
    const handleProfile = () =>{
        router.push('/profile');
        setDeposit(false);
        setHome(false);
        setProfile(true);
    }
    return (
        <div style={{ backgroundColor: '#247f9e' }} className='w-full lg:min-h-screen lg:w-32 md:w-32 md:min-h-screen md:h-full lg:h-full'>
            <div className='flex items-center justify-center mx-4 lg:mx-0 md:mx-0'>
                <div className='flex items-center justify-between w-full my-3 lg:w-0 md:w-0 lg:grid md:grid lg:mt-0 md:mt-0'>

                    <span onClick={handleHome} className={` cursor-pointer lg:my-10 md:my-8 hover:text-white ${home ? 'text-white' : 'text-purple-800'}`}><ImHome3 size={25}></ImHome3></span>

                    <span onClick={handleDeposit} className={` cursor-pointer hover:text-white ${deposit ? 'text-white' : 'text-purple-800'}`}><RiLuggageDepositFill size={25}></RiLuggageDepositFill></span>

                    <span onClick={handleProfile} className={` cursor-pointer lg:my-10 md:my-8 hover:text-white ${profile ? 'text-white' : 'text-purple-800'}`}><IoIosSettings size={28}></IoIosSettings></span>

                    <label htmlFor="logoutModal" className='text-purple-800 cursor-pointer hover:text-red-600'><AiOutlineLogout size={28}></AiOutlineLogout></label>

                </div>
            </div>

            <div>
                <input type="checkbox" id="logoutModal" className="modal-toggle" />
                <label htmlFor="logoutModal" className="cursor-pointer modal">
                <label className="relative modal-box" htmlFor="">
                            <h3 className="flex justify-center py-4 text-3xl text-red-300">Are you sure to log out?</h3>
                            <div className='flex justify-end gap-x-6'>
                                <label htmlFor="logoutModal" style={{
                                    backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat",
                                }} className={`normal-case btn ${FoodProductStyle.moreFoodButton} btn-sm border-0 text-xl text-black mt-2 w-32`}>No
                                </label>

                                <label onClick={() => {
                                    localStorage.removeItem('tradingUser')
                                    router.push("/")
                                }} htmlFor="logoutModal" style={{
                                    backgroundImage: "linear-gradient(45deg ,green ,white)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat",
                                }} className={`normal-case btn ${FoodProductStyle.logOut} btn-sm border-0 text-xl text-black mt-2 w-32`}>Yes
                                </label>

                            </div>
                        </label>
                </label>
            </div>
        </div>
    );
};

export default Sidebar;
import { ImHome3 } from 'react-icons/im';
import { RiLuggageDepositFill } from 'react-icons/ri';
import { IoIosSettings } from 'react-icons/io';
import { AiOutlineLogout } from 'react-icons/ai';
import { useRouter } from 'next/router';
import FoodProductStyle from '../CSSfile/FoodProductStyle.module.css';
const Sidebar = () => {
    const router = useRouter();
    return (
        <div style={{ backgroundColor: '#247f9e' }} className='w-full lg:min-h-screen lg:w-32 md:w-32 md:min-h-screen md:h-full lg:h-full'>
            <div className='flex items-center justify-center mx-4 lg:mx-0 md:mx-0'>
                <div className='flex items-center justify-between w-full my-3 lg:w-0 md:w-0 lg:grid md:grid lg:mt-0 md:mt-0'>

                    <span onClick={() => router.push('/dashboard')} className='lg:my-10 md:my-8'><ImHome3 size={25} color='#8B1874'></ImHome3></span>

                    <span onClick={() => router.push('/deposit')} className=''><RiLuggageDepositFill size={25} color='#8B1874'></RiLuggageDepositFill></span>

                    <span onClick={() => router.push('/profile')} className='lg:my-10 md:my-8'><IoIosSettings size={28} color='#8B1874'></IoIosSettings></span>

                    <label htmlFor="logoutModal" className=''><AiOutlineLogout size={28} color='#8B1874'></AiOutlineLogout></label>

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
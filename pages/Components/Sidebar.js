import { ImHome3 } from 'react-icons/im';
import { RiLuggageDepositFill } from 'react-icons/ri';
import { IoIosSettings } from 'react-icons/io';
import { AiOutlineLogout } from 'react-icons/ai';
import { useRouter } from 'next/router';
const Sidebar = () => {
    const router = useRouter();
    return (
        <div style={{backgroundColor: '#247f9e'}} className='w-full min-h-screen lg:w-32 md:w-32'>
            <div className='flex items-center justify-center mx-4 lg:mx-0 md:mx-0'>
                <div className='flex items-center justify-between w-full mt-5 lg:w-0 md:w-0 lg:grid md:grid lg:mt-0 md:mt-0'>
                    <p>Logo</p>

                    <span onClick={()=>router.push('/dashboard')} className='lg:my-10 md:my-8'><ImHome3 size={25} color='#8B1874'></ImHome3></span>

                    <span onClick={()=>router.push('/deposit')} className=''><RiLuggageDepositFill size={25} color='#8B1874'></RiLuggageDepositFill></span>

                    <span onClick={()=>router.push('/profile')} className='lg:my-10 md:my-8'><IoIosSettings size={28} color='#8B1874'></IoIosSettings></span>

                    <span onClick={()=>router.push('/profile')} className=''><AiOutlineLogout size={28} color='#8B1874'></AiOutlineLogout></span>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;
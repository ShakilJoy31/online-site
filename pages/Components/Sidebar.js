import { ImHome3 } from 'react-icons/im';
import { RiLuggageDepositFill } from 'react-icons/ri';
import { IoIosSettings } from 'react-icons/io';
import { useRouter } from 'next/router';
const Sidebar = () => {
    const router = useRouter();
    return (
        <div className='w-full lg:w-32 md:w-32'>
            <div className='flex items-center justify-center mx-4 lg:mx-0 md:mx-0'>
                <div className='flex items-center justify-between w-full lg:w-0 md:w-0 lg:grid md:grid'>
                    <p>Logo</p>

                    <span onClick={()=>router.push('/dashboard')} className='lg:my-10 md:my-8'><ImHome3 size={25} color='Blue'></ImHome3></span>

                    <span onClick={()=>router.push('/deposit')} className=''><RiLuggageDepositFill size={25} color='Blue'></RiLuggageDepositFill></span>

                    <span onClick={()=>router.push('/profile')} className='my-10'><IoIosSettings size={28} color='Blue'></IoIosSettings></span>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;
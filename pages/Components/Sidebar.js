import { ImHome3 } from 'react-icons/im';
import { RiLuggageDepositFill } from 'react-icons/ri';
import { IoIosSettings } from 'react-icons/io';
import { useRouter } from 'next/router';
const Sidebar = () => {
    const router = useRouter();
    return (
        <div className='w-32 min-h-screen' style={{backgroundColor: '#247f9e'}}>
            <div className='flex items-center justify-center'>
                <div className=''>
                    <p>Logo</p>

                    <span onClick={()=>router.push('/dashboard')} className=''><ImHome3 size={25} color='Blue'></ImHome3></span>

                    <span onClick={()=>router.push('/deposit')} className=''><RiLuggageDepositFill size={25} color='Blue'></RiLuggageDepositFill></span>

                    <span onClick={()=>router.push('/profile')} className=''><IoIosSettings size={28} color='Blue'></IoIosSettings></span>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;
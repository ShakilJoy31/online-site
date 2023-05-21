import { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FoodProductStyle from '../pages/CSSfile/FoodProductStyle.module.css';
// import Spinner from "./Spinner";
import { useRouter } from "next/router";
import { getUser } from "./lib/healper";

const Login = ({ setLogin }) => {
    const router = useRouter(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(null); 
    const [isPasswordVasible, setIsPasswordVasible] = useState(true);
    const [remember, setRemember] = useState(null);
    const [signedInUser, setSignedInUser] = useState([]); 

    useEffect(()=>{
        getUser().then(res => setSignedInUser(res));
    },[])
    const databaseUser = signedInUser.find(user => user?.email ==  email);
    
    const handleLoginButton = () => {
        if((databaseUser?.email == email) && (databaseUser?.password == password)){
            if(remember == true){
                localStorage.setItem('tradingUser', JSON.stringify(databaseUser))
                localStorage.setItem('savedUser', JSON.stringify(databaseUser))
            }
            else{
                localStorage.setItem('unSavedUser', JSON.stringify(databaseUser))
            }
            router.push('/dashboard');
        }
    }
    return (
        <div className='py-20'>
            <h1 className='flex justify-center mb-2 font-serif text-4xl text-blue-600'>Log in here</h1>
            <div className='flex items-center justify-center'>
                <div style={{
                borderRadius: '5px',
                backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
            }} className='lg:p-6 md:p-4 p-2 lg:w-[650px] md:w-[550px] w-[340px]'>

                    <div className='my-4'>
                        <label className="">
                            <span className="text-white">Type your email</span>
                        </label>
                        <input onChange={(e)=>setEmail(e?.target?.value)} type="text" placeholder="Type Email" className="w-full mt-2 bg-black focus:border-red-500 input" />
                    </div>

                    <div>
                        <label className="">
                            <span className="text-white">Type your password</span>
                        </label>
                        <input onChange={(e)=>setPassword(e?.target?.value)} type="text" placeholder="Type Password" className="w-full mt-2 bg-black focus:border-red-500 input" />
                    </div>

                    <div className='my-4'>
                        <div className="form-control">
                            <label className="flex items-center cursor-pointer">
                                <span className="mr-4 text-white">Remember Password</span>
                                <input onChange={(e)=>setRemember(e.target.checked)} type="checkbox" className="checkbox checkbox-primary" />
                            </label>
                        </div>
                    </div>

                    <div>
                        <label onClick={handleLoginButton} style={{
                            backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
                            backgroundSize: "100%",
                            backgroundRepeat: "repeat",
                        }} className={`normal-case btn ${FoodProductStyle.moreFoodButton} border-0 text-xl text-black w-full`}>Log in
                        </label>
                    </div>

                    <div className='my-4'>
                        <h1>Forget your password?<span style={{color: 'black'}} className='ml-4 text-xl cursor-pointer hover:underline'>Reset Password</span></h1>
                    </div>
                    <div className={`${FoodProductStyle.customDivider}`}></div>
                    <div className='mt-4'>
                        <h1>New here?<span onClick={()=>router.push('/signup')} style={{color: 'black'}} className='ml-4 text-xl cursor-pointer hover:underline'>Sign up</span></h1>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;




// setLoading(true);
// const foundDatabaseUser = loggedInUser.find(matchedGmail => matchedGmail?.email === email && matchedGmail?.password === password);
// console.log(foundDatabaseUser);
// if (foundDatabaseUser) {
//     const checkLocalStorage = localStorage.getItem('user');
//     if (!checkLocalStorage) {
//         localStorage.setItem('user', JSON.stringify(foundDatabaseUser));
//         setUser(foundDatabaseUser)
//         setLogin(false);
//         toast.success('Welcome back to Our Restaurant!')
//     }
// }
// else {
//     toast.error('UPPS! Invalid Gmail or Password')
// }


{/* <div onClick={()=>setLoading(false)}><Spinner></Spinner></div> */ }




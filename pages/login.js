import { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FoodProductStyle from '../pages/CSSfile/FoodProductStyle.module.css';
// import Spinner from "./Spinner";
import { useRouter } from "next/router";

const Login = ({ setLogin }) => {
    const router = useRouter(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVasible, setIsPasswordVasible] = useState(true);
    // const { user, setUser } = UserStore.useContainer();
    // const [loading, setLoading] = useState(false);
    const handleLoginButton = () => {
        if(email == 'shakil@gmail.com' && password == '12345'){
            router.push('/dashboard');
        }
        // console.log(email, password); 
    }
    return (
        <div className='py-20'>
            <h1 className='flex justify-center mb-2 font-serif text-4xl text-blue-600'>Log in here</h1>
            <div className='flex items-center justify-center'>
                <div style={{
                    backgroundColor: '#19A7CE',
                    borderRadius: '5px'
                }} className='p-6 lg:w-[650px] md:w-[550px] w-[340px]'>

                    {/* <h1 className='flex justify-center text-4xl'>Log in here</h1> */}

                    <div className='my-4'>
                        <label className="">
                            <span className="text-white">Type your email</span>
                        </label>
                        <input onChange={(e)=>setEmail(e?.target?.value)} type="text" placeholder="Type Email" className="w-full mt-2 focus:border-red-500 input" />
                    </div>

                    <div>
                        <label className="">
                            <span className="text-white">Type your password</span>
                        </label>
                        <input onChange={(e)=>setPassword(e?.target?.value)} type="text" placeholder="Type Password" className="w-full mt-2 focus:border-red-500 input" />
                    </div>

                    <div className='my-4'>
                        <div className="form-control">
                            <label className="flex items-center cursor-pointer">
                                <span className="mr-4 text-white">Remember Password</span>
                                <input type="checkbox" className="checkbox checkbox-primary" />
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
                        <h1>Forget your password?<span style={{color: '#643843'}} className='ml-4 cursor-pointer hover:underline'>Reset Password</span></h1>
                    </div>
                    <div className={`${FoodProductStyle.customDivider}`}></div>
                    <div className='mt-4'>
                        <h1>New here?<span onClick={()=>router.push('/signup')} style={{color: '#643843'}} className='ml-4 cursor-pointer hover:underline'>Sign up</span></h1>
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




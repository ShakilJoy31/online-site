import { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FoodProductStyle from '../pages/CSSfile/FoodProductStyle.module.css';
// import Spinner from "./Spinner";
import { useRouter } from "next/router";

const Signup = () => {
    const router = useRouter();
    const [countries, setCountries] = useState([]);
    const allCountry = [];
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(data => data.json())
            .then(res => {
                res.map(country => {
                    allCountry.push(country.name.common);
                    setCountries(allCountry);
                });
            })
    }, [])
    
    console.log(countries);
    return (
        <div className='py-6'>
            <h1 className='flex justify-center mb-2 font-serif text-4xl text-blue-600'>Sign up here.</h1>
            <div className='flex items-center justify-center'>
                <div style={{
                    backgroundColor: '#19A7CE',
                    borderRadius: '5px'
                }} className='p-6 lg:w-[650px] md:w-[550px] w-[340px]'>

                    {/* <h1 className='flex justify-center text-4xl'>Log in here</h1> */}

                    <div className=''>
                        <label className="">
                            <span className="text-white">Type your Username</span>
                        </label>
                        <input type="text" placeholder="Type Your Name" className="w-full mt-2 focus:border-red-500 input" />
                    </div>

                    <div className='my-4'>
                        <label className="">
                            <span className="text-white">Type your full name</span>
                        </label>
                        <input type="text" placeholder="Type Your Name" className="w-full mt-2 focus:border-red-500 input" />
                    </div>

                    <div className=''>
                        <label className="">
                            <span className="text-white">Type your email</span>
                        </label>
                        <input type="email" placeholder="hello@example.com" className="w-full mt-2 focus:border-red-500 input" />
                    </div>

                    <div className='my-4'>
                        <label className="">
                            <span className="text-white">Type your Phone</span>
                        </label>
                        <input type="number" placeholder="Type number" className="w-full mt-2 focus:border-red-500 input" />
                    </div>

                    <div className=''>
                        <label className="">
                            <span className="text-white">Select Country</span>
                        </label>
                        <select className="w-full mt-2 select focus:outline-none">
                            <option selected>Select Country</option>
                            {
                                countries.map(country => <option>{country}</option>)
                            }
                        </select>
                    </div>

                    <div className='my-4'>
                        <label className="">
                            <span className="text-white">Type your password</span>
                        </label>
                        <input type="password" placeholder="Type Password" className="w-full mt-2 focus:border-red-500 input" />
                    </div>

                    <div>
                        <label className="">
                            <span className="text-white">Type your password again</span>
                        </label>
                        <input type="password" placeholder="Confirm Password" className="w-full mt-2 focus:border-red-500 input" />
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
                        <label style={{
                            backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
                            backgroundSize: "100%",
                            backgroundRepeat: "repeat",
                        }} className={`normal-case btn ${FoodProductStyle.moreFoodButton} border-0 text-xl text-black w-full`}>Sign up
                        </label>
                    </div>

                    {/* <div className='my-4'>
                        <h1>Forget your password?<span style={{color: '#643843'}} className='ml-4 cursor-pointer hover:underline'>Reset Password</span></h1>
                    </div> */}
                    <div className={`${FoodProductStyle.customDivider} my-4`}></div>
                    <div>
                        <h1>Already have an account?<span onClick={() => router.push('/login')} style={{ color: '#643843' }} className='ml-4 cursor-pointer hover:underline'>Log in</span></h1>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default Signup;
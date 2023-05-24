import { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FoodProductStyle from '../pages/CSSfile/FoodProductStyle.module.css';
// import Spinner from "./Spinner";
import { useRouter } from "next/router";
import { addUser, getUser } from "./../lib/healper";

const Signup = () => {
    const router = useRouter();
    // const [countries, setCountries] = useState([]);
    // const allCountry = [];
    // useEffect(() => {
    //     fetch('https://restcountries.com/v3.1/all')
    //         .then(data => data.json())
    //         .then(res => {
    //             res.map(country => {
    //                 allCountry.push(country.name.common);
    //                 setCountries(allCountry);
    //             });
    //         })
    // }, [])
    const [fullName, setFullName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [phone, setPhone] = useState(''); 
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [image, setImage] = useState('');
    const [hostedImage, setHostedImage] = useState('');
    const [signedInUser, setSignedInUser] = useState([]); 
    const [referId, setReferId] = useState(); 
    const [isPasswordVasible, setIsPasswordVasible] = useState(true);
    const [isConfirmPasswordVasible, setIsConfirmPasswordVasible] = useState(true);
    const ImageStorageKey = '1f2e07ae412954d520f52351b07dee66';
    if(image){
        const formDataImage = new FormData();
        formDataImage.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${ImageStorageKey}`;
            fetch(url, {
                method: 'POST',
                body: formDataImage
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    setHostedImage(result?.data?.display_url)
                })
                setImage('');
    }
    const date = new Date().toString().slice(3,16); 
    const userData = {fullName: fullName, email: email, phone: phone, password: password, userPhoto: hostedImage, referId: referId, joinedSince: date};

    useEffect(()=>{
        getUser().then(res => setSignedInUser(res));
    },[])
    const databaseUser = signedInUser.find(user => user?.email ==  email);
    const handleSignUp = () =>{
        localStorage.setItem('savedUser', JSON.stringify(userData))
        if((password == confirmPassword) && !databaseUser){
            addUser(userData).then(res => router.push('/'))
        }
    }
    return (
        <div className='pb-20 mt-4 lg:pb-6 md:pb-6 lg:t-6 md:pt-6'>
            <h1 className='flex justify-center mb-3 font-serif text-4xl text-blue-600'>Sign up here.</h1>
            <div className='flex items-center justify-center'>
                <div style={{
                borderRadius: '5px',
                backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
            }} className='lg:p-6 md:p-4 p-2 lg:w-[650px] md:w-[550px] w-[340px]'>
                <div className='my-4'>
                        <label className="">
                            <span className="text-white">Type your full name</span>
                        </label>
                        <input onChange={(e)=>setFullName(e.target.value)} type="text" placeholder="Type Your Name" className="w-full mt-2 bg-black focus:border-red-500 input" />
                    </div>

                    <div className=''>
                        <label className="">
                            <span className="text-white">Type your email</span>
                        </label>
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="hello@example.com" className="w-full mt-2 bg-black focus:border-red-500 input" />
                        {
                            databaseUser ? <label className="">
                            <span className="flex justify-center text-red-700">{databaseUser?.email} is already exists on database.</span>
                        </label> : ''
                        }
                    </div>

                    <div className='my-4'>
                        <label className="">
                            <span className="text-white">Type your Phone</span>
                        </label>
                        <input onChange={(e)=>setPhone(e.target.value)} type="number" placeholder="Type number" className="w-full mt-2 bg-black focus:border-red-500 input" />
                    </div>


                    <div className='my-4'>
                        <label className="">
                            <span className="text-white">Upload Picture</span>
                        </label>
                        <input onChange={(event) => setImage(event?.target?.files[0])} type="file" className="w-full bg-black file-input focus:outline-none focus:border-red-500 input " />
                    </div>

                    <div className=''>
                        <label className="">
                            <span className="text-white">Type your password</span>
                        </label>
                        <div className="flex items-center justify-between bg-black border-0 rounded-lg mt-2">
                                <input onChange={(e) => setPassword(e.target.value)} type={isPasswordVasible ? 'password' : 'text'} placeholder='Type your password' className="mr-4 bg-black border-0 w-full input focus:outline-none" />
                                {
                                    isPasswordVasible ? <span onClick={()=>setIsPasswordVasible(!isPasswordVasible)} className="mr-2"><AiFillEyeInvisible size={25}></AiFillEyeInvisible></span> : <span onClick={()=>setIsPasswordVasible(!isPasswordVasible)} className="mr-2"><AiFillEye size={25}></AiFillEye></span>
                                }
                        </div>
                    </div>


                    <div className="my-4">
                        <label className="">
                            <span className="text-white">Type your password again</span>
                        </label>
                        <div className="flex items-center justify-between bg-black border-0 rounded-lg mt-2">
                                <input onChange={(e) => setConfirmPassword(e.target.value)} type={isConfirmPasswordVasible ? 'password' : 'text'} placeholder='Type your password' className="mr-4 bg-black border-0 w-full input focus:outline-none" />
                                {
                                    isConfirmPasswordVasible ? <span onClick={()=>setIsConfirmPasswordVasible(!isConfirmPasswordVasible)} className="mr-2"><AiFillEyeInvisible size={25}></AiFillEyeInvisible></span> : <span onClick={()=>setIsConfirmPasswordVasible(!isConfirmPasswordVasible)} className="mr-2"><AiFillEye size={25}></AiFillEye></span>
                                }
                        </div>
                    </div>

                    <div className=''>
                        <label className="">
                            <span className="text-white">Refer Id</span>
                            <input onChange={(event) => setReferId(event?.target?.value)} type="text" className="w-full mt-2 bg-black file-input focus:outline-none focus:border-red-500 input " placeholder="Enter your refer id" />
                        </label>
                        
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
                        <label onClick={handleSignUp} style={{
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
                        <h1>Already have an account?<span onClick={() => router.push('/login')} style={{ color: 'black' }} className='ml-4 text-xl cursor-pointer hover:underline'>Log in</span></h1>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default Signup;
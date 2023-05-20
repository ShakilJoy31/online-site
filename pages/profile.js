import { RiLuggageDepositFill } from 'react-icons/ri';
import FoodProductStyle from '../pages/CSSfile/FoodProductStyle.module.css';
import { useRouter } from 'next/router';

const Profile = () => {
    const router = useRouter();
    return (
        <div className='mx-2 mt-4 pb-36 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0'>

            <h1 className='my-6 ml-2 text-3xl text-black '>Profile</h1>

            <div className='grid w-full lg:justify-between md:justify-between gap-x-6 lg:flex md:flex'>

                <div style={{
                    borderRadius: '5px',
                    backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                }} className="flex items-center w-full mb-4 lg:mb-0 md:mb-0">
                    <div className="flex items-center p-2 lg:p-6 md:p-4">
                        <img style={{ borderRadius: '50%' }} className='w-20 h-20 mr-4' src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Trisha_at_World_Children%27s_Day_Press_Meet_%28cropped%29.png" alt="" />

                        <div>
                            <h2 className="mb-4 font-serif text-2xl">Welcome <span className='font-bold text-black'>Shakil</span></h2>
                            <p>User id: 4875643</p>
                        </div>
                    </div>
                </div>


                <div style={{
                    borderRadius: '5px',
                    backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                }} className='w-full p-4 lg:p-8 md:p-6'>
                    <div className='flex items-center'>
                        <div style={{
                            padding: '10px',
                            borderRadius: '50%',
                            backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                            backgroundSize: "100%",
                            backgroundRepeat: "repeat",
                        }} className='mr-6'>
                            <span className=''><RiLuggageDepositFill size={25} color='Blue'></RiLuggageDepositFill></span>
                        </div>

                        <div>
                            <p className='text-xl'>Current Balance</p>
                            <p className='text-2xl'>$00.00</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Boro card */}
            <div className='mt-4 lg:mt-8 md:mt-6'>
                <div className='grid w-full lg:justify-between md:justify-between gap-x-6 lg:flex md:flex'>

                    <div style={{
                        borderRadius: '5px',
                        backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                        backgroundSize: "100%",
                        backgroundRepeat: "repeat",
                    }} className="flex items-center w-full mb-4 lg:mb-0 md:mb-0">
                        <div className="p-2 lg:p-6 md:p-4">
                            <p className='text-2xl text-black'>Account Actions</p>
                            <p className='my-2 lg:my-4'>You can perform various actions on your trading account like deposit and withdrawal.</p>
                            <div>
                                <p onClick={() => router.push("/deposit")} className={`flex justify-center py-2 ${FoodProductStyle.quickMenu}`}>Deposit</p>

                                <p onClick={() => router.push("/withdrawal")} className={`flex justify-center py-2 ${FoodProductStyle.quickMenu}`}>Withdrawal</p>

                                <p onClick={() => router.push("/internalTransfer")} className={`flex justify-center py-2 ${FoodProductStyle.quickMenu}`}>Internal Transfer</p>

                                <p onClick={() => router.push("/walletAddress")} className={`flex justify-center py-2 ${FoodProductStyle.quickMenu}`}>Wallet Address</p>

                                <p onClick={() => router.push("/paymentPassword")} className={`flex justify-center py-2 ${FoodProductStyle.quickMenu}`}>Payment Password</p>

                                <p onClick={() => router.push("/withdrawalReports")} className={`flex justify-center py-2 ${FoodProductStyle.quickMenu}`}>Withdrawal Reports</p>

                                <p onClick={() => router.push("/depositReports")} className={`flex justify-center py-2 ${FoodProductStyle.quickMenu}`}>Deposit Reports</p>

                                <p onClick={() => router.push("/rebateReports")} className={`flex justify-center py-2 ${FoodProductStyle.quickMenu}`}>Rebate Reports</p>

                                <p onClick={() => router.push("/resetPin")} className={`flex justify-center py-2 ${FoodProductStyle.quickMenu}`}>Reset Pin</p>

                            </div>
                        </div>
                    </div>


                    <div style={{
                        borderRadius: '5px',
                        backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                        backgroundSize: "100%",
                        backgroundRepeat: "repeat",
                    }} className='w-full p-4 lg:p-8 md:p-6 lg:h-48 md:h-48'>
                        <div className=''>
                            <p className='text-2xl text-black'>Earn amazing rewards</p>
                            <p className='my-4'>Refer your friends and Earn rebate reward up to 2 levels</p>
                            <div>
                                <label style={{
                                    backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat",
                                }} className={`normal-case btn ${FoodProductStyle.foodCard} border-0 text-xl text-black w-full lg:w-48 md:w-32 `}>Referral Program
                                </label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='w-full mt-4 lg:mt-8 md:mt-6'>
                <div style={{
                    borderRadius: '5px',
                    backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                }} className='w-full p-4 mb-4 lg:p-8 md:p-6 lg:mb-0 md:mb-0'>
                        <h1 className='mb-6 font-serif text-2xl'>User Information</h1>
                        <div className='grid items-center justify-between lg:flex md:flex'>
                            <div>
                                <p className=''>Phone</p>
                                <p className='text-xl text-black'>0235489</p>
                            </div>
                            <div className='my-2 lg:my-0 md:my-0'>
                                <p className=''>Email</p>
                                <p className='text-xl text-black'>shakil@gmail.com</p>
                            </div>
                            <div>
                                <p className=''>Joined since</p>
                                <p className='text-xl text-black'>4378939</p>
                            </div>
                        </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;


// style={{
//     borderRadius: '5px',
//     backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
//     backgroundSize: "100%",
//     backgroundRepeat: "repeat",
// }}


// style={{
//     padding: '10px',
//     borderRadius: '50%',
//     backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
//     backgroundSize: "100%",
//     backgroundRepeat: "repeat",
// }}
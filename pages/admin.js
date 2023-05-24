import { useRouter } from 'next/router';
import FoodProductStyle from '../pages/CSSfile/FoodProductStyle.module.css';
import { useEffect, useState } from 'react';
import { getUser, updateUserWithTrId } from '@/lib/healper';

const Admin = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        getUser().then(res => {
            const payAbleUsers = res.filter(user => user?.userTrId);
            setData(payAbleUsers);
        });
    },[])
    const handleDeclineUserToPay = (id) => {
        updateUserWithTrId(id, {userTrId: ''}).then(res => {
            if(res){
                const restUser = data.filter(rest => rest?._id != id); 
                setData(restUser); 
            }
        });
    }
    const [accepted, setAccepted] = useState(''); 
    const [declined, setDeclined] = useState(false); 
    const handleAcceptUserToPay = (id) => {
        updateUserWithTrId(id, {isVerified: true}).then(res => setDeclined(true));
        setAccepted(id); 
    }
    console.log(data); 
    return (
        <div className='mx-2 mt-4 pb-36 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0'>
            <h1 className='my-6 ml-2 text-3xl text-black'>Admin Route</h1>
            <div style={{
                    borderRadius: '5px',
                    backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                }} className="overflow-x-auto">
                    {
                        data.length == 0 ? <div>
                        <p className='flex justify-center my-4 text-2xl font-serif text-black'>No User Found! </p>
                    </div> : <table className="table w-full">
                    <thead>
                        <tr>
                            <th> <span className='flex justify-center'>SL</span></th>
                            <th> <span className='flex justify-center'>User id</span></th>
                            <th> <span className='flex justify-center'>Email</span> </th>
                            <th> <span className='flex justify-center'>Amount</span> </th>
                            <th> <span className='flex justify-center'>Tr Id</span> </th>
                            <th> <span className='flex justify-center'>Actions</span> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((payAbleUser, index) => <tr key={index} className={`${FoodProductStyle.tableRow}`}>
                            <th> <span className='flex justify-center'>{index + 1}</span> </th>
                            <th> <span className='flex justify-center'>{payAbleUser?._id}</span> </th>
                            <td> <span className='flex justify-center'>{payAbleUser?.email}</span> </td>
                            <td> <span className='flex justify-center'>{payAbleUser?.amount}</span> </td>
                            <td> <span className='flex justify-center'>{payAbleUser?.userTrId}</span> </td>
                            <td> <div className='flex justify-center'>
                            <div className='items-center justify-between p-6 text-black rounded-sm'>
                                {
                                    (payAbleUser?.isVerified) || <label onClick={()=>handleDeclineUserToPay(payAbleUser?._id)} style={{
                                        backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
                                        backgroundSize: "100%",
                                        backgroundRepeat: "repeat",
                                    }} className={`normal-case btn ${FoodProductStyle.paymentActionButton} border-0 mr-4 text-black btn-sm`} disabled={declined}>Declined
                                    </label>
                                }
                                    

                                    <label onClick={()=>handleAcceptUserToPay(payAbleUser?._id)} htmlFor="afterProceedModal" style={{
                                        backgroundImage: "linear-gradient(45deg ,#5D9C59, #3E54AC)",
                                        backgroundSize: "100%",
                                        backgroundRepeat: "repeat",
                                    }} className={`normal-case btn ${FoodProductStyle.paymentActionButtonDec} border-0 text-white btn-sm`}> {
                                        (payAbleUser?.isVerified || (accepted == payAbleUser?._id)) ? 'Accepted' : 'Accept'
                                    }
                                    </label>

                                </div>
                            </div> </td>
                        </tr>)
                        }
                        
                    </tbody>
                </table>
                    }
                
            </div>
        </div>
    );
};

export default Admin;
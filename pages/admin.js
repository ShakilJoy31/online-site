import { useRouter } from 'next/router';
import FoodProductStyle from '../pages/CSSfile/FoodProductStyle.module.css';
import { useEffect, useState } from 'react';
import { getUser, updateUserWithTrId } from '@/lib/healper';
import { getDataFromLocalStore } from './../getDataFromLocalStorage';

const Admin = () => {
    const [data, setData] = useState([]);
    const [refers, setRefers] = useState([]);
    const user = getDataFromLocalStore();
    useEffect(() => {
        getUser().then(res => {
            const payAbleUsers = res.filter(user => user?.userTrId);
            setData(payAbleUsers);
            setRefers(res);
        });
    }, [])
    // const paymentCalculationByAdmin = () => {
    //     console.log("button is called.")
    //     const myRefers = refers.filter(mySingleRefer => (user?._id == mySingleRefer?.referId));
    //     const myRefersWithPayment = myRefers.filter(mySingleRefer => mySingleRefer?.isVerified == true);
    //     let sum = 0;
    //     // let amountOfSecondRefer = 0; 
    //     myRefersWithPayment.map(obj => obj.amount).forEach(amount => {
    //         if (typeof amount == 'number') {
    //             sum += amount;
    //         }
    //     });
    //     const amountFromRefer = (sum * (5 / 100));
    //     // if(myRefersWithPayment){

    //     // }
    //     const amountFromSecondRefer = ((myRefersWithPayment[0]?.amountFromRefer * (100 / 5)) * (3 / 100)) || 0;
    //     const amountFromThirdRefer = ((myRefersWithPayment[0]?.amountFromSecondRefer * (100 / 3)) * (2 / 100)) || 0;
    //     if (amountFromRefer) {
    //         updateUserWithTrId(user?._id, { amountFromRefer: amountFromRefer, amountFromSecondRefer: amountFromSecondRefer }).then(res => { console.log(res)})
    //     }

    //     if (amountFromSecondRefer) {
    //         updateUserWithTrId(user?._id, { amountFromRefer: amountFromRefer, amountFromSecondRefer: amountFromSecondRefer, amountFromThirdRefer: amountFromThirdRefer }).then(res => {console.log(res) })
    //     }
    //     console.log(myRefersWithPayment[0])

    // }
    const handleDeclineUserToPay = (id) => {
        updateUserWithTrId(id, { userTrId: '' }).then(res => {
            if (res) {
                const restUser = data.filter(rest => rest?._id != id);
                setData(restUser);
            }
        });
    }
    const [accepted, setAccepted] = useState('');
    const [declined, setDeclined] = useState(false);
    const handleAcceptUserToPay = (id) => {
        updateUserWithTrId(id, { isVerified: true }).then(res => {
            setDeclined(true)
        });
        setAccepted(id);
        // paymentCalculationByAdmin();
    }
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
                        <p className='flex justify-center my-4 font-serif text-2xl text-black'>No User Found! </p>
                    </div> : <table className="table w-full">
                        <thead>
                            <tr>
                                <th> <span className='flex justify-center'>SL</span></th>
                                <th> <span className='flex justify-center'>User id</span></th>
                                <th> <span className='flex justify-center'>Email</span> </th>
                                <th> <span className='flex justify-center'>Amount</span> </th>
                                <th> <span className='flex justify-center'>Joined</span> </th>
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
                                    <td> <span className='flex justify-center'>{payAbleUser?.joinedSince}</span> </td>
                                    <td> <span className='flex justify-center'>{payAbleUser?.userTrId}</span> </td>
                                    <td> <div className='flex justify-center'>
                                        <div className='items-center justify-between p-6 text-black rounded-sm'>
                                            {
                                                (payAbleUser?.isVerified) || <label onClick={() => handleDeclineUserToPay(payAbleUser?._id)} style={{
                                                    backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
                                                    backgroundSize: "100%",
                                                    backgroundRepeat: "repeat",
                                                }} className={`normal-case btn ${FoodProductStyle.paymentActionButton} border-0 mr-4 text-black btn-sm`}>Declined
                                                </label>
                                            }


                                            <label onClick={() => handleAcceptUserToPay(payAbleUser?._id)} htmlFor="afterProceedModal" style={{
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
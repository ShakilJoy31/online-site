import React from 'react';

const PaymentPassword = () => {
    return (
        <div className='mx-2 mt-4 pb-36 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0'>
            <h1 className='my-6 ml-2 text-3xl text-black'>Payment Password</h1>
                <div style={{
                    borderRadius: '5px',
                    backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                }} className='w-full h-24 p-4 mb-4 lg:h-40 md:h-36 lg:p-8 md:p-6 lg:mb-0 md:mb-0'>
                    <div>
                        <h1 className='flex items-center justify-center text-xl text-white lg:text-3xl md:text-2xl'>Withdrawal Pin Binded Successfully</h1>
                    </div>

                </div>

        </div>
    );
};

export default PaymentPassword;
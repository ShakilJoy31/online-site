import { useRouter } from "next/router";
import FoodProductStyle from '../pages/CSSfile/FoodProductStyle.module.css';


const MyTrade = () => {
    const router = useRouter();
    return (
        <div className="mx-2 mt-4 pb-36 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0">
            <h1 className="my-6 text-3xl text-black">My Trade</h1>
            {/* <div style={{
                borderRadius: '5px',
                backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
            }} className="w-full p-2 mb-4 lg:p-6 md:p-4 lg:mb-0 md:mb-0">
                <h1 className="mb-4 font-serif text-2xl">Trades</h1>
                <div style={{
                borderRadius: '5px',
                backgroundImage: "linear-gradient(45deg, #B799FF, #643843)",
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
            }} className="pb-2">
                    <p className={`pt-3 lg:block md:block flex justify-between px-2 ${FoodProductStyle.mytrade}`}><span className="font-bold">TRADE BOTS:</span> <span>COMBAT BOT DELUXE</span></p>
                    
                    <p className={`px-2 lg:block md:block flex justify-between ${FoodProductStyle.mytrade}`}><span className="font-bold">AMOUNT:</span> <span>$136.29</span></p>
                    
                    <p className={`px-2 lg:block md:block flex justify-between ${FoodProductStyle.mytrade}`}><span className="font-bold">PROFIT GENERATED:</span> <span>$36.29</span></p>
                    
                    <p className={`px-2 lg:block md:block flex justify-between ${FoodProductStyle.mytrade}`}><span className="font-bold">STATUS:</span> <span>ACTIVE</span></p>
                    
                    <p className={`px-2 lg:block md:block flex justify-between ${FoodProductStyle.mytrade}`}><span className="font-bold">EXPIRATION:</span> <span>2023-05-07 01:40:10</span></p>
                    
                    <p className={`px-2 lg:block md:block flex justify-between ${FoodProductStyle.mytrade}`}><span className="font-bold">DAYS RUNNING:</span> <span>27</span></p>
                    
                    <div className="px-2">
                    <label style={{
                        backgroundImage: "linear-gradient(45deg ,#B71375, #6C9BCF)",
                        backgroundSize: "100%",
                        backgroundRepeat: "repeat",
                    }} className={`normal-case btn ${FoodProductStyle.moreFoodButton} border-0 text-xl text-white lg:w-64 md:w-64 w-full btn-sm mt-2`}>Move to balance
                    </label> 
                    </div>
                </div>
                <div>
                </div>
            </div> */}
        </div>
    );
};

export default MyTrade;
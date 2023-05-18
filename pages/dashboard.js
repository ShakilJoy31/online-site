import Link from 'next/link';
import { IoLogoUsd } from 'react-icons/io';
import { RiLuggageDepositFill } from 'react-icons/ri';
import FoodProductStyle from '../pages/CSSfile/FoodProductStyle.module.css';

const Dashboard = () => {
    return (
        <div className='mx-2 mt-4 pb-36 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0'>
            <div className="w-full carousel">
                <div id="slide1" className="relative w-full carousel-item">
                    <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" className="w-full h-4/6" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>


                <div id="slide2" className="relative w-full carousel-item">
                    <img src="https://us.123rf.com/450wm/shushanto/shushanto2209/shushanto220900703/191842443-destruction-of-planets-concept-art-illustration-background-image.jpg?ver=6" className="w-full h-4/6" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>


                <div id="slide3" className="relative w-full carousel-item">
                    <img src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg" className="w-full h-4/6" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>


                <div id="slide4" className="relative w-full carousel-item">
                    <img src="https://www.shutterstock.com/image-photo/man-hands-holding-global-network-260nw-1801568002.jpg" className="w-full h-4/6" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            {/* Statics */}
            <div className='lg:mt-[-250px] mt-[-50px] grid lg:justify-between md:justify-between gap-x-6 lg:flex md:flex'>
                <div style={{ background: '#19A7CE' }} className={`w-full card hover:shadow-2xl ${FoodProductStyle.moreFoodButton}`}>
                    <div className="p-3 lg:p-8 md:p-6">
                        <h2 className="mb-2 text-black card-title md:mb-4 lg:mb-6">Statistics</h2>
                        <div style={{
                            borderRadius: '5px',
                            backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                            backgroundSize: "100%",
                            backgroundRepeat: "repeat",
                        }} className='p-4 lg:p-8 md:p-6 '>
                            <div className='flex items-center'>
                                <div style={{
                                    padding: '10px',
                                    borderRadius: '50%',
                                    backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat",
                                }} className='mr-6'>
                                    <span onClick={() => router.push('/deposit')} className=''><RiLuggageDepositFill size={25} color='Blue'></RiLuggageDepositFill></span>
                                </div>

                                <div>
                                    <p className='text-xl'>Current Balance</p>
                                    <p className='text-2xl'>$00.00</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* More card */}
                <div className='grid w-full grid-cols-3 gap-2 mt-4 lg:gap-4 md:gap-4 lg:mt-0 md:mt-0'>
                    <div>
                        <div className={`h-24 bg-white w-42 card cursor-pointer ${FoodProductStyle.moreFoodButton}`}>
                            <div className="pt-4">
                                <div>
                                    <img className='block w-12 h-12 mx-auto' src="https://www.combattradebots.com/images/tb2.png" alt="" />
                                    <p className='flex justify-center text-black'>Trade Boot</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`h-24 bg-white w-42 card cursor-pointer ${FoodProductStyle.moreFoodButton}`}>
                            <div className="pt-4">
                                <div>
                                    <img className='block w-12 h-12 mx-auto' src="https://www.combattradebots.com/images/trade.png" alt="" />
                                    <p className='flex justify-center text-black'>My Trade</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`h-24 bg-white w-42 card cursor-pointer ${FoodProductStyle.moreFoodButton}`}>
                            <div className="pt-4">
                                <div>
                                    <img className='block w-12 h-12 mx-auto' src="https://www.combattradebots.com/images/team1.png" alt="" />
                                    <p className='flex justify-center text-black'>Team</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`h-24 bg-white w-42 card cursor-pointer ${FoodProductStyle.moreFoodButton}`}>
                            <div className="pt-4">
                                <div>
                                    <img className='block w-12 h-12 mx-auto' src="https://www.combattradebots.com/images/trade.png" alt="" />
                                    <p className='flex justify-center text-black'>Charts</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`h-24 bg-white w-42 card cursor-pointer ${FoodProductStyle.moreFoodButton}`}>
                            <div className="pt-4">
                                <div>
                                    <img className='block w-12 h-12 mx-auto' src="https://www.combattradebots.com/images/support.png" alt="" />
                                    <p className='flex justify-center text-black'>Support</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`h-24 bg-white w-42 card cursor-pointer ${FoodProductStyle.moreFoodButton}`}>
                            <div className="pt-4">
                                <div>
                                    <img className='block w-12 h-12 mx-auto' src="https://www.combattradebots.com/certi.png" alt="" />
                                    <p className='flex justify-center text-black'>Certificate</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`h-24 bg-white w-42 card cursor-pointer ${FoodProductStyle.moreFoodButton}`}>
                            <div className="pt-4">
                                <div>
                                    <img className='block w-12 h-12 mx-auto' src="https://www.combattradebots.com/tgg.png" alt="" />
                                    <p className='flex justify-center text-black'>Chanel</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Market Analysis */}
            <div className='mt-4 lg:mt-8 md:mt-6'>
                <div style={{ background: '#19A7CE' }} className="w-full card hover:shadow-2xl">
                    <div className="">
                        <h2 className="p-4 text-black card-title lg:p-8 md:p-6 ">Market Analysis</h2>
                        <div className='p-4 lg:p-8 md:p-6 '>
                            <div className='flex items-center'>
                                <div className='grid w-full grid-cols-1 gap-2 lg:grid-cols-3 md:grid-cols-2 lg:gap-4 md:gap-4'>
                                    <Link target='_blank' href='https://in.tradingview.com/symbols/USDTUSD/?utm_campaign=single-quote&utm_medium=widget_new&utm_source=www.combattradebots.com'>
                                    <div style={{
                                    borderRadius: '5px',
                                    backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat",
                                }} className={`w-full p-4 cursor-pointer ${FoodProductStyle.moreFoodButton}`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='flex items-center justify-center'>
                                        <img style={{borderRadius:'50%'}} className='w-10 h-10 mr-4' src="https://s3-symbol-logo.tradingview.com/crypto/XTVCUSDT.svg" alt="" />
                                            <p>USDTUSD</p>
                                            <p>TETHER/USD</p>
                                        </div>
                                        <span style={{
                                            padding:'6px',
                                            borderRadius: '5px',
                                            background: 'black'
                                        }} className='hidden lg:block md:block'>Trading view</span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                    <p className='my-2 text-2xl text-white'>0.0000</p>
                                    <span style={{
                                            padding:'6px',
                                            borderRadius: '5px',
                                            background: 'black'
                                        }} className='block mr-2 lg:hidden md:hidden'>Trading view</span>
                                    </div>
                                </div>
                                    </Link>
                                

                                <Link target='_blank' href='https://in.tradingview.com/symbols/BTCUSDT/?utm_campaign=single-quote&utm_medium=widget_new&utm_source=www.combattradebots.com'>
                                <div style={{
                                    borderRadius: '5px',
                                    backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat",
                                }} className={`w-full p-4 cursor-pointer ${FoodProductStyle.moreFoodButton}`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='flex items-center justify-center'>
                                        <img style={{borderRadius:'50%'}} className='w-10 h-10 mr-4' src="https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC.svg" alt="" />
                                            <p>USDTUSD</p>
                                            <p>TETHER/USD</p>
                                        </div>
                                        <span style={{
                                            padding:'6px',
                                            borderRadius: '5px',
                                            background: 'black'
                                        }} className='hidden lg:block md:block'>Trading view</span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                    <p className='my-2 text-2xl text-white'>0.0000</p>
                                    <span style={{
                                            padding:'6px',
                                            borderRadius: '5px',
                                            background: 'black'
                                        }} className='block mr-2 lg:hidden md:hidden'>Trading view</span>
                                    </div>
                                </div>
                                </Link>

                                <Link target='_blank' href='https://in.tradingview.com/symbols/ETHUSD/?utm_campaign=single-quote&utm_medium=widget_new&utm_source=www.combattradebots.com'>
                                <div style={{
                                    borderRadius: '5px',
                                    backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
                                    backgroundSize: "100%",
                                    backgroundRepeat: "repeat",
                                }} className={`w-full p-4 cursor-pointer ${FoodProductStyle.moreFoodButton}`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='flex items-center justify-center'>
                                        <img style={{borderRadius:'50%'}} className='w-10 h-10 mr-4' src="https://s3-symbol-logo.tradingview.com/crypto/XTVCETH.svg" alt="" />
                                            <p>USDTUSD</p>
                                            <p>TETHER/USD</p>
                                        </div>
                                        <span style={{
                                            padding:'6px',
                                            borderRadius: '5px',
                                            background: 'black'
                                        }} className='hidden mt-2 mr-2 lg:block md:block'>Trading view</span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                    <p className='my-2 text-2xl text-white'>0.0000</p>
                                    <span style={{
                                            padding:'6px',
                                            borderRadius: '5px',
                                            background: 'black'
                                        }} className='block mr-2 lg:hidden md:hidden'>Trading view</span>
                                    </div>
                                </div>
                                </Link>

                                
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
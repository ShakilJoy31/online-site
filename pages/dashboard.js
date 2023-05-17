
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
            <div className='lg:mt-[-250px] mt-[-50px] grid justify-between gap-x-6 lg:flex md:flex'>
                <div className="w-full card bg-base-100 hover:shadow-2xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="justify-end card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                {/* More card */}
                <div className='grid w-full grid-cols-3 gap-2 mt-4 lg:gap-4 md:gap-4 lg:mt-0 md:mt-0'>
                    <div>
                        <div className="h-24 w-42 card bg-base-100 hover:shadow-2xl">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="h-24 w-42 card bg-base-100 hover:shadow-2xl">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="h-24 w-42 card bg-base-100 hover:shadow-2xl">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="h-24 w-42 card bg-base-100 hover:shadow-2xl">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="h-24 w-42 card bg-base-100 hover:shadow-2xl">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="h-24 w-42 card bg-base-100 hover:shadow-2xl">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="h-24 w-42 card bg-base-100 hover:shadow-2xl">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Market Analysis */}
            <div className='mt-4 lg:mt-8 md:mt-6'>
                <div className="w-full card bg-base-100 hover:shadow-2xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="justify-end card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;
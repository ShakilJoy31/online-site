
const Dashboard = () => {
    return (
        <div className='mx-12'>
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

        </div>
    );
};

export default Dashboard;
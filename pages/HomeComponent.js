import React from 'react';

const HomeComponent = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://khelo.live/wp-content/uploads/2020/07/MV5BM2U5ZTIxMzUtMmQ5MC00YTdhLThjOWYtODUzNDQ0MThmMmQ4XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_.jpg" className="max-w-sm rounded-lg shadow-2xl" />

                    <div>
                        <h1  style={{
                    backgroundImage: "linear-gradient(45deg, black, red)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                    webkitBackgroundClip: "text",
                    webkitTextFillColor: "transparent",
                    mozBackgroundClip: "text",
                    mozTextFillColor: "transparent"
                }} className="text-7xl font-bold">খেলা হবে!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Download App</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;
import React from 'react';
import NavbarCss from './Navbar.module.css';
import { FcDownload } from 'react-icons/fc';

const HomeComponent = () => {
    const downloadApp = () =>{
        console.log('toast to show.'); 
    }
    return (
        <div className='flex justify-center lg:grid md:grid'>
            <div className="mx-4 hero lg:mx-0 md:mx-0">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <img src="https://khelo.live/wp-content/uploads/2020/07/MV5BM2U5ZTIxMzUtMmQ5MC00YTdhLThjOWYtODUzNDQ0MThmMmQ4XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_.jpg" className="w-64 max-w-xs rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="px-2 text-5xl font-bold text-red-400 lg:text-7xl md:text-6xl lg:px-0 md:px-0">খেলা হবে!</h1>
                        <p className="px-2 py-6 text-xl text-black lg:px-0 md:px-0">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        <div className='flex justify-center lg:grid lg:justify-start'>
                        <button onClick={downloadApp} className={`cursor-pointer p-2 btn normal-case text-xl border-0 rounded-md flex justify-center my-2 ${NavbarCss.downloadBtn} `}><span className='pb-2'>Download App</span> <span><FcDownload size={35}></FcDownload></span></button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;
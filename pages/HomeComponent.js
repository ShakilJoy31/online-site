import React, { useState, useEffect } from 'react';
import allData from './heliverse_mock_data.json';
import { PaginatedData } from './paginatedData';
import { BsSearch } from "react-icons/bs";
import MyStyle from './Navbar.module.css';

const HomeComponent = () => {
    const [current, setCurrent] = useState(1);
    const [iniData, setIniData] = useState(allData.slice(0, 20));
    const [data, setData] = useState(allData.slice(0, 20));
    // const forPagination = Math.ceil(allData.length / 20);
    PaginatedData(current);
    const handlePrevious = () => {
        setCurrent(current - 1);
        const previousData = PaginatedData(current);
        setData(previousData);
        setIniData(previousData);
    }
    const handleNext = () => {
        // setData()
        setCurrent(current + 1);
        const nextData = PaginatedData(current);
        setData(nextData);
        setIniData(nextData);
    }
    const handleSearchByInput = (e) => {
        if (!e) {
            setData(allData.slice(0, 20))
        }
        else {
            const input = e.toLowerCase();
            const specificData = data.filter(gotData => (gotData.first_name + gotData.last_name).toLowerCase().match(input));
            console.log(input)
            setData(specificData);
        }
    }
    const handleCatagory = (catagory) => {
        if (catagory == 'domain') {
            // const domainData = data.filter()
        }
        else if (catagory == 'gender') {

        }
        else {

        }
    }
    const handleDoimainInput = (event) => {
        const inputDomain = event?.target.value;
        const specificData = iniData.filter(gotData => gotData?.domain == inputDomain);
        setData(specificData);
    }
    const [female, setFemale] = useState([]);

    // Male
    const handleGenderMale = (event) => {
        const inputGender = event.target.checked;
        if (inputGender) {
            const specificData = iniData.filter(gotData => gotData?.gender == 'Male');
            setData(specificData);
        }
        else {
            setData(iniData);
        }
    }

    // Female
    const handleGenderFemale = (event) => {
        const inputGender = event.target.checked;
        if (inputGender) {
            const specificData = iniData.filter(gotData => gotData?.gender == 'Female');
            setData(specificData);
        }
        else {
            setData(iniData);
        }
    }

    // Agender
    const handleGenderAgender = (event) => {
        const inputGender = event.target.checked;
        if (inputGender) {
            const specificData = iniData.filter(gotData => gotData?.gender == 'Agender');
            setData(specificData);
        }
        else {
            setData(iniData);
        }
    }
    const handleAvailability = (aval) => {
        if (aval == 'Available') {
            const specificData = iniData.filter(gotData => gotData?.available == true);
            setData(specificData);
        }
        else if (aval == 'notAvailable') {
            const specificData = iniData.filter(gotData => gotData?.available == false);
            setData(specificData);
        }
        else {
            setData(iniData);
        }
    }
    let markedAllUser = [];
    const handleChecked = (getId, event) => {
        const markedData = iniData.find(marked => marked?.id === getId);
        const isAdded = markedAllUser.find(user => user?.id === getId);
        if (event.target.checked) {
            if (!isAdded) {
                markedAllUser.push(markedData);
            }
        }
        else {
            const checked = markedAllUser.filter(user => user?.id !== getId);
            markedAllUser = checked;
        }
        localStorage.setItem('team', JSON.stringify(markedAllUser));
    }

    const [teamMember, setTeamMember] = useState([]); 
    // Exploring team
    const teamDetails = () =>{
        const localStorageUser = JSON.parse(localStorage.getItem('team'));
        setTeamMember(localStorageUser); 
    }
    // useEffect(()=>{
        
    // },[])
    console.log(teamMember); 
    const [teamMake, setTeamMake] = useState(false);
    return (

        <div>
            <div className='flex items-center justify-center mt-6 form-control'>
                <div className='grid items-center justify-between w-full lg:flex md:flex'>
                    <input onChange={(e) => handleSearchByInput(e.target.value)} type='text' placeholder='Search by name' className="w-full lg:w-64 md:w-64 focus:outline-none input" />

                    <div className='flex items-center justify-between my-4 lg:justify-center md:justify-center gap-x-4 lg:my-0 md:my-0'>
                        {
                            !teamMake ? <label onClick={() => setTeamMake(!teamMake)} style={{
                                backgroundImage: "linear-gradient(45deg, #E08E6D, #E1D4BB)",
                                backgroundSize: "100%",
                                backgroundRepeat: "repeat",
                            }} className={`normal-case btn btn-sm border-0 text-black`}>Make Team</label> : <label onClick={() => setTeamMake(!teamMake)} style={{
                                backgroundImage: "linear-gradient(45deg, #E08E6D, #E1D4BB)",
                                backgroundSize: "100%",
                                backgroundRepeat: "repeat",
                            }} className={`normal-case btn btn-sm border-0 text-black`}>Cancel</label>
                        }

                        <label htmlFor="explore-team" onClick={teamDetails} style={{
                            backgroundImage: "linear-gradient(45deg, #E08E6D, #E1D4BB)",
                            backgroundSize: "100%",
                            backgroundRepeat: "repeat",
                        }} className={`normal-case btn btn-sm border-0 text-black`}>Team Details</label>
                        {
                            markedAllUser.length > 1 ? <label htmlFor="done-selection" onClick={() => handleCatagory('domain')} style={{
                                backgroundImage: "linear-gradient(45deg, #E08E6D, #E1D4BB)",
                                backgroundSize: "100%",
                                backgroundRepeat: "repeat",
                            }} className={`normal-case btn btn-sm border-0 text-black`}>Done</label> : ''
                        }

                    </div>

                    <div className='flex items-center justify-between lg:justify-center md:justify-center gap-x-4'>

                        <label htmlFor="domain-modal" onClick={() => handleCatagory('domain')} style={{
                            backgroundImage: "linear-gradient(45deg, #E08E6D, #E1D4BB)",
                            backgroundSize: "100%",
                            backgroundRepeat: "repeat",
                        }} className={`normal-case btn btn-sm border-0 text-black`}>Domain</label>

                        <label htmlFor="gender-modal" onClick={() => handleCatagory('gender')} style={{
                            backgroundImage: "linear-gradient(45deg, #E08E6D, #E1D4BB)",
                            backgroundSize: "100%",
                            backgroundRepeat: "repeat",
                        }} className={`normal-case btn btn-sm border-0 text-black`}>Gender</label>

                        <label htmlFor="availability-modal" onClick={() => handleCatagory('availability')} style={{
                            backgroundImage: "linear-gradient(45deg, #E08E6D, #E1D4BB)",
                            backgroundSize: "100%",
                            backgroundRepeat: "repeat",
                        }} className={`normal-case btn btn-sm border-0 text-black`}>Availability</label>
                    </div> 
                </div>

            </div>

            <div className='grid grid-cols-1 gap-4 mt-4 lg:grid-cols-4 md:grid-cols-2'>
                {
                    data.map((singleData, index) => <div key={index} className={`bg-blue-300 ${MyStyle.element} w-80 card md:w-64 lg:w-72`}>
                        <div className="p-2">
                            <div className="flex items-center card-actions">
                                <div className="avatar">
                                    <div className="w-16 border border-red-500 rounded-full">
                                        <img src={singleData.avatar} alt="" loading="lazy" />
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-center justify-between gap-x-2'>
                                        <h1>{singleData?.first_name + " " + singleData?.last_name}</h1>
                                        {
                                            teamMake ? <input onChange={(e) => handleChecked(singleData?.id, e)} type="checkbox" className="bg-red-300 checkbox checkbox-success" /> : ''
                                        }

                                    </div>
                                    <p>{singleData?.email.slice(0, 20)}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }


            </div>

            <div className='flex justify-center my-4'>

                <div className="btn-group">
                    <button onClick={handlePrevious} className="btn" disabled={current == 1}>«</button>
                    <button className="btn">Page {current}</button>
                    <button onClick={handleNext} className="btn" disabled={current == 50}>»</button>
                </div>
            </div>

            <div>
                <input type="checkbox" id="domain-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="relative bg-blue-400 modal-box">
                        <label htmlFor="domain-modal" className="absolute btn btn-sm btn-circle right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Select a domain</h3>
                        <select onChange={(e) => handleDoimainInput(e)} className="w-full my-2 select focus:outline-none">
                            <option disabled selected>Pick your favorite Simpson</option>
                            {
                                allData.slice(0, 20).map((forDomain, index) => <option key={index}>{forDomain.domain}</option>)
                            }

                        </select>
                    </div>
                </div>
            </div>


            <div>
                <input type="checkbox" id="gender-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="relative bg-black modal-box">
                        <label htmlFor="gender-modal" className="absolute text-black bg-white btn btn-sm btn-circle right-2 top-2">✕</label>
                        <h3 className="flex justify-center mb-2 text-lg font-bold">Select a Gender</h3>
                        <div className='flex items-center justify-between'>
                            <div className="form-control">
                                <label className="cursor-pointer label">
                                    <span className="mr-4 text-xl text-white">Male</span>
                                    <input onChange={(e) => handleGenderMale(e)} type="checkbox" className="checkbox checkbox-white" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer label">
                                    <span className="mr-4 text-xl text-white">Female</span>
                                    <input onChange={(e) => handleGenderFemale(e)} type="checkbox" className="checkbox checkbox-white" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="cursor-pointer label">
                                    <span className="mr-4 text-xl text-white">Agender</span>
                                    <input onChange={(e) => handleGenderAgender(e)} type="checkbox" className="checkbox checkbox-white" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div>
                <input type="checkbox" id="availability-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="relative bg-black modal-box">
                        <label htmlFor="availability-modal" className="absolute text-black bg-white btn btn-sm btn-circle right-2 top-2">✕</label>
                        <h3 className="flex justify-center mb-2 text-lg font-bold text-white">Select a Availability</h3>
                        <div className='flex items-center justify-around'>
                            <button onClick={() => handleAvailability('notAvailable')} className="text-white normal-case bg-red-700 btn btn-sm">Not Available</button>

                            <button onClick={() => handleAvailability('Available')} className="text-white normal-case bg-green-700 btn btn-sm">Available</button>

                            <button onClick={() => handleAvailability('reset')} className="text-black normal-case bg-white hover:bg:black hover:text-white btn btn-sm">Reset</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Explore team modal */}
            <div>
                <input type="checkbox" id="explore-team" className="modal-toggle" />
                <div className="modal">
                    <div className="w-11/12 max-w-5xl modal-box">
                        <h3 className="flex justify-center mb-2 text-3xl">Team details</h3>
                        <div className='flex justify-center'>
                        <div className='grid grid-cols-1 gap-4 mt-4 lg:grid-cols-4 md:grid-cols-2'>
                            {/* Show the user by card */}
                            {
                                teamMember.map((user, index) => 
                                    <div key={index} className={`flex items-center w-full p-2 border border-red-400 rounded hover:cursor-pointer ${MyStyle.team_card}`}>
                                        <div className='w-24'>
                                            <img className='w-24' src={user?.avatar} alt="" loading="lazy" />
                                        </div>

                                        <div>
                                        <h1>{user.first_name + user?.last_name}</h1>
                                        <p>{user?.email}</p>
                                        <p><span>{user?.gender}</span> <span>{user?.available ? 'Available' : 'Not available'}</span> </p>
                                        </div>

                                    </div>
                                )
                            }
                        </div>
                        </div>

                        

                        <div className='flex justify-end mt-2'>
                        <label onClick={()=> setTeamMake(false)} htmlFor="explore-team" style={{
                            backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
                            backgroundSize: "100%",
                            backgroundRepeat: "repeat",
                        }} className={`normal-case btn ${MyStyle.cancel} btn-sm border-0 text-xl text-black mt-2 w-32`}>Cancel</label>
                        </div>

                        

                    </div>
                </div>
            </div>


        </div>
    );
};

export default HomeComponent;
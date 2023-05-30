const baseUrl = 'https://online-site.vercel.app';
// http://localhost:3000
// https://online-site.vercel.app



// Get all the user from the database
export const getUser = async () => {
    const response = await fetch(`https://tradesent-server.onrender.com/api/task/fantasyBook`)
    const json = await response.json();
    console.log(json);
    return json;
}

// Post user to the database
export const addUser = async (formData) => {
    try {
        const Option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`https://tradesent-server.onrender.com/api/task/fantasy`, Option);
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        return (error.message);
    }
}


// Update user with feedback
export async function updateUserWithTrId(userId, formData) {
    try {
        const Options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`https://tradesent-server.onrender.com/api/task/featuredBook/?userId=${userId}`, Options)
        const json = await response.json();
        return json;
    } catch (error) {
        return (error);
    }
}



export async function deleteReservation (userId){
        try{
        const Options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(`${baseUrl}/api/reservation/reservation/?userId=${userId}`, Options)
        const json = await response.json(); 
        return json;
    }catch(error){
        return(error); 
    }
    
}



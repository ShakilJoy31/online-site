const baseUrl = 'http://localhost:3000'; 
// http://localhost:3000
// https://online-site-zcqv.vercel.app/login



// Get all the user from the database
export const getUser = async () => {
    const response = await fetch(`${baseUrl}/api/users`)
    const json = await response.json();
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
        const response = await fetch(`${baseUrl}/api/users`, Option);
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
        const response = await fetch(`${baseUrl}/api/users/?userId=${userId}`, Options)
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



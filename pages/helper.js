// Get all the data from the database
export const getData = async () => {
    const response = await fetch(`https://drive.google.com/file/d/1ibmr3WD7Jw6oLL6O_W390WojCLfCHw-k/view`); 
    console.log(response); 
    const json = await response.json();
    return json;
    
}
import Users from "./../model/user";

// Getting all the users from DB.
export async function getUser(req, res) {
    try {
        const users = await Users.find({});
        if (!users) {
            return res.status(404).json({ error: 'Data is not found' })
        }
        // console.log(users); 
        res.status(200).json(users)
    } catch (errors) {
        res.status(404).json({ errors: 'Got error while fetching the data' })
    }
}

// Posting a user to the database
export async function postUsers(req, res) {
    try {
        const formData = req.body;
        console.log(formData);
        if (!formData) {
            return res.status(404).json({ error: 'Form data is not provided!' })
        }
        // chat GPT
        // const savedUser = await Users.insertOne(formData);
        // console.log(savedUser); 

        // PH
        const user = new Users(formData);
        await user.save();
        return res.status(200).json(user);


        // Users.create(formData, (error, data) => {
        //     return res.status(200).json(data);
        // })
    } catch (errors) {
        return res.status(404).json({ error: 'Failed to post.' });
    }
}

export async function updateUserWithTrId(req, res) {
    try {
        const { userId } = req.query;
        const formData = req.body;
        if (userId && formData) {
            const user = await Users.findByIdAndUpdate(userId, formData)
            return res.status(200).json(user);
        }
        res.status(404).json({ error: 'User is not selected...!' });
    } catch (errors) {
        return res.status(404).json({ error: 'Operation failed to update the data....!' });
    }
}
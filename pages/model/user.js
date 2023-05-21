import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
    fullName: String,
    email: String,
    phone: Number,
    country: String,
    password: String,
    userPhoto: String
})

const Users = models.users || model('users', userSchema)
export default Users; 
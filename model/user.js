import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
    fullName: String,
    email: String,
    phone: Number,
    password: String,
    userPhoto: String,
    userTrId: String,
    amount: Number,
    isVerified: Boolean,
    referId: String,
    amountFromRefer: Number
})

const Users = models.users || model('users', userSchema)
export default Users; 
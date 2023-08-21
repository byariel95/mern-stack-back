import mongoose, { Schema } from "mongoose";

export const User = "user";

const UserSchema = new Schema({
    firstName : String,
    lastName: String,
    email: {
        type:String,
        unique: true,

    },
    password: String,
    role: String,
    active: Boolean,
    avatar:String,
    
},{
    timestamps: true,
    versionKey: false
})

const UserModel = mongoose.model(User, UserSchema);
export default UserModel;
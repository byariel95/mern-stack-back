import UserModel from '../models/user.schema.js'
import { hashPassword,validatePassword } from '../utils/hash-validate-password.js';

class UserService {
    async registerUser({ firstName, lastName, email, password }) {
        try {

            const user = new UserModel({
                firstName,
                lastName,
                email: email.toLowerCase(),
                role: "User",
                active: false,
            });

            user.password = await hashPassword(password);
            const newUser = await user.save();

            return newUser;
        } catch (error) {
            console.log("🚀 ~ file: user.service.js:16 ~ UserService ~ registerUser ~ error:", error)
            throw error;
        }

    }

    async findByEmail(email) {
        try {
            const user = await UserModel.findOne({ email })
            return user;
        } catch (error) {
            console.log("🚀 ~ file: user.service.js:36 ~ UserService ~ findByEmail ~ error:", error)
            throw error;
        }

    }

    async loginUser({ email, password }) {
        try {
            const user = await this.findByEmail(email.toLowerCase());
            if (user) {
                const validate = await validatePassword(password,user.password)
                if (!validate){
                    return {
                        status: 400
                    }
                }else{
                    if(!user.active){
                        return {
                            status:401
                        }
                    }
                    return {
                        status: 200,
                        user,
                    }
                }
            }else{
                return {
                    status:500
                }
            }
        } catch (error) {
            console.log("🚀 ~ file: user.service.js:45 ~ UserService ~ login ~ error:", error)
            throw error;
        }

    }
}

export default UserService
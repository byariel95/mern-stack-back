import bcrypt from 'bcryptjs'

export async function hashPassword (password){
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt);
    return hashPassword
}


export async function validatePassword (password,hashedPassword){
    const hashPassword = await bcrypt.compare(password,hashedPassword);
    return hashPassword
}
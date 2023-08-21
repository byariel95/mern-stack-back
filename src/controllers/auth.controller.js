import UserService from "../services/user.service.js";
import {} from '../utils/jwt.js'

const userService = new UserService()

async function register(req, res) {

    try {
        const user = req.body;
        const response = await userService.registerUser(user);
        return res.status(200).json({msg: "User Created", user:response})
    } catch (error) {
        if(error.code === 11000){
            return res.status(400).send({msg: "Usuario Duplicado"});
        }
    }
}

async function login(req, res) {

    try {
        const body = req.body;
        if (!body.email) res.status(400).send({msg:"email is required"});
        if (!body.password) res.status(400).send({msg:"password is required"});
        
        const response = await userService.loginUser(body);
        if(response.status=== 400){
            return res.status(400).send({msg: "Usuario o Contrase;a incorrecta"})
        }else if(response.status=== 401){
            return res.status(401).send({msg: "Usuario no Activado"})
        }else if(response.status===200){
            return res.status(200).send({msg: "Ok"})
        }
        
    } catch (error) {
        res.status(500).send({msg:error})
    }
}


export { register,login} 
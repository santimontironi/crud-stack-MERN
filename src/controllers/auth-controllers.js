import User from "../models/user-model.js"
import bcrypt from "bcryptjs";
import {createAccessToken} from "../libs/jwt.js";

export const register = async (req,res) => {

    //se toman los datos enviados desde el frontend
    const {username,email,password} = req.body

    try{

        //se hashea la contraseña
        const hashPassword = await bcrypt.hash(password,10)

        //se crea un nuevo usuario
        const newUser = new User({
            username,
            email,
            password: hashPassword
        })
    
        //se guarda el usuario creado
        const userSaved = await newUser.save()

        await createAccessToken({id:userSaved.id})
        
    }
    catch(error){
        console.log("Wrong user register:",error)
    }
    
}

export const login = (req,res) => {
    res.send('LOGIN')
}
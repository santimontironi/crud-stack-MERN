import User from "../models/user-model.js"
import bcrypt from "bcryptjs";

export const register = async (req,res) => {

    const {username,email,password} = req.body

    try{

        const hashPassword = await bcrypt.hash(password,10)

        const newUser = new User({
            username,
            email,
            password: hashPassword
        })
    
        const userSaved = await newUser.save()

        res.json({
            id:userSaved.id,
            username: userSaved.username,
            email: userSaved.email
        })
        
    }
    catch(error){
        console.log("Wrong user register:",error)
    }
    
}

export const login = (req,res) => {
    res.send('LOGIN')
}
import User from "../models/user-model.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

        jwt.sign(
            {
                id:userSaved.id
            },
            "secret123",
            {
                expiresIn: "1d"
            },
            (err,token) => {
                if(err) console.log(err)
                res.cookie('token',token)
                res.json({
                    message:'User created successfully'
                })
            }
        )
                
    }
    catch(error){
        console.log("Wrong user register:",error)
    }
    
}

export const login = (req,res) => {
    res.send('LOGIN')
}
import User from "../models/user-model.js"
import bcrypt from "bcryptjs";
import {createAccessToken} from "../libs/jwt.js";


export const register = async (req,res) => {

    //se toman los datos enviados desde el frontend
    const {username,email,password} = req.body

    try{

        const existingUser = await User.findOne({email:email})
        if(existingUser){
            return res.status(400).json({message: 'El correo ya está registrado.'})
        }

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

        const token = await createAccessToken({id:userSaved.id})

        //se crea una cookie llamada token donde contiene como valor la cookie creada
        res.cookie('token',token)

        res.json({
            id: userSaved.id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        })
        
    }
    catch(error){
        return res.status(500).json({message:`Wrong user register: ${error}`})
    }
    
}

export const login = async (req,res) => {

    //se toman los datos enviados desde el frontend
    const {email,password} = req.body

    try{

        const userFound = await User.findOne({email})

        if(!userFound){
            return res.status(404).json({message:'User not found'})
        }

        //se hashea la contraseña
        const matchPassword = await bcrypt.compare(password,userFound.password)

        if(!matchPassword){
            return res.status(400).json({message:'Incorrect password.'})
        }

        
        const token = await createAccessToken({id:userFound.id})

        //se crea una cookie llamada token donde contiene como valor la cookie creada
        res.cookie('token',token)

        res.json({
            id: userFound.id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        })
        
    }
    catch(error){
        console.log("Wrong user register:",error)
    }
    
}

export const logout = (req,res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({ message: "Logout successfully" });
    } catch (error) {
        res.status(500).json({ message: "Logout error", error: error.message });
    }
}

export const profile = async (req,res) => {
    const user = await User.findById(req.user.id)
    console.log(`${user.username} is in Profile`)
    res.send('Welcome to the profile')
}
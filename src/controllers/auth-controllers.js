import User from "../models/user-model.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

        //creacion del token
        jwt.sign(
            //payload
            {
                id:userSaved.id
            },
            //llave secreta
            "secret123",
            //opciones
            {
                expiresIn: "1d"
            },
            //callback asincrono para almacenar el token en una cookie en el navegador
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
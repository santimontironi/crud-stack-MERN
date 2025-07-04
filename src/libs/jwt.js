import {TOKEN_SECRET} from "../config.js";
import jwt from 'jsonwebtoken'

export function createAccessToken(payload){
    return new Promise((resolve,reject) => {
        jwt.sign(
            payload,
            //llave secreta
            TOKEN_SECRET,
            //opciones
            {
                expiresIn: "1d"
            },
            //callback asincrono para almacenar el token en una cookie en el navegador
            async (err,token) => {
                if(err) console.log(reject(err))
                resolve(token)
            }
        )
    })
    
}

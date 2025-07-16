import { useState } from "react";
import { registerAxios } from "../../api/auth";
import { loginAxios } from "../../api/auth";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({children}) => {

    const[user,setUser] = useState(null)

    async function signUp(user){
        const res = await registerAxios(user)
        setUser(res.data)
        return res.data
    }

    async function signIn(user){
        const res = await loginAxios(user)
        setUser(res.data)
        return res.data
    }

    return(
        <AuthContext.Provider value={{
            signUp,
            signIn,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}
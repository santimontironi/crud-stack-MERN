import { useState } from "react";
import { registerAxios, loginAxios, logoutAxios } from "../../api/auth";
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

    async function logout(){
        await logoutAxios()
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{
            signUp,
            signIn,
            logout,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}
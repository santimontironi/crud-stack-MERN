import { useState } from "react";
import { registerAxios } from "../../api/auth";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({children}) => {

    const[user,setUser] = useState(null)

    async function signUp(user){
        const res = await registerAxios(user)
        setUser(res.data)
    }

    return(
        <AuthContext.Provider value={{
            signUp,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}
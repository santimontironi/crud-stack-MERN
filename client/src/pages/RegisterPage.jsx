import { useForm } from "react-hook-form"
import { useAuth } from "../context/useAuth"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../public/css/auth.css"

const RegisterPage = () => {

    const {register,handleSubmit,reset,formState:{ errors }} = useForm()
    const {signUp} = useAuth()

    const[errorRegister,setErrorRegister] = useState("")
    const[correctRegister,setCorrectRegister] = useState(false)
    const navigate = useNavigate()

    async function submitForm(values) {
        try {
          await signUp(values)
          setCorrectRegister(true)
          setErrorRegister("")
          reset();
        } catch (error) {
            if(error.response?.data?.message){
                setErrorRegister(error.response.data.message)
            }
        }
    }

    useEffect(() => {
        if (correctRegister) {
            navigate('/tasks')
        }
    }, [correctRegister, navigate])

    return (
        <main className="containerRegister">
            <h1 className="">Registro</h1>
            
            <div className="contentForm">
                <form method="post" onSubmit={handleSubmit(submitForm)}>

                    <input type="text" {...register("username",{required:true})} placeholder="Username" />
                    {errors.username && (
                        <p className="error">El username es requerido</p>
                    )}

                    <input type="email" {...register("email",{required:true})} placeholder="Correo electrónico" />
                    {errors.email && (
                        <p className="error">El correo electrónico es requerido</p>
                    )}

                    <input type="password" {...register("password",{required:true,minLength:{value:6,message:'La contraseña debe tener al menos 6 caracteres.'}})} placeholder="Contraseña" />
                    {errors.password && (
                        <p className="error">Error: Contraseña vacía o menos de 6 caracteres.</p>
                    )}

                    <button type="submit">Registrarse</button>

                    {errorRegister &&(
                        <p className="messageError">{errorRegister}</p>
                    )}

                </form>
                
                <p>Si ya tenés cuenta <a href="/login">Ingresá</a></p>

            </div>
            
        </main>
        
  )
}

export default RegisterPage
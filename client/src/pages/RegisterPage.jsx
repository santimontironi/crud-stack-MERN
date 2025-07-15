import { useForm } from "react-hook-form"
import { useAuth } from "../context/useAuth"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../public/css/register.css"

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
                    <input type="email" {...register("email",{required:true})} placeholder="Correo electrónico" />
                    <input type="password" {...register("password",{required:true,minLength:{value:6,message:'La contraseña debe tener al menos 6 caracteres.'}})} placeholder="Contraseña" />
                    <button type="submit">Registrarse</button>
                </form>
                {errors.username && (
                    <p>El username es requerido</p>
                )}
                {errors.email && (
                    <p>El correo electrónico es requerido</p>
                )}
                {errors.password && (
                    <p>Error: Contraseña vacía o menos de 6 caracteres.</p>
                )}
                <p>Si ya tenés cuenta <a href="/login">Ingresá</a></p>
            </div>
            
            {errorRegister &&(
                <p className="messageError">{errorRegister}</p>
            )}
            {correctRegister &&(
                <p className="correctRegister">Usuario registrado correctamente.</p>
            )}
        </main>
        
  )
}

export default RegisterPage
import { useForm } from "react-hook-form"
import { useAuth } from "../context/useAuth"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../public/css/register.css"

const RegisterPage = () => {

    const {register,handleSubmit,reset} = useForm()
    const {signUp} = useAuth()

    const[errors,setErrors] = useState("")
    const[correctRegister,setCorrectRegister] = useState(false)
    const navigate = useNavigate()

    async function submitForm(values) {
        try {
          await signUp(values)
          setCorrectRegister(true)
          setErrors("")
          reset();
        } catch (error) {
            if(error.response?.data?.message){
                setErrors(error.response.data.message)
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
                    <input type="text" {...register("username",{required:'El nombre de usuario es obligatorio'})} placeholder="Username" />
                    <input type="email" {...register("email",{required:'El correo es obligatorio.'})} placeholder="Correo electrónico" />
                    <input type="password" {...register("password",{required:true,minLength:{value:6,message:'La contraseña debe tener al menos 6 caracteres.'}})} placeholder="Contraseña" />
                    <button type="submit">Registrarse</button>
                </form>
                <p>Si ya tenés cuenta <a href="/login">Ingresá</a></p>
            </div>
            
            {errors &&(
                <p className="messageError">{errors}</p>
            )}
            {correctRegister &&(
                <p className="correctRegister">Usuario registrado correctamente.</p>
            )}
        </main>
        
  )
}

export default RegisterPage
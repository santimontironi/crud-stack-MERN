import { useForm } from "react-hook-form"
import { useAuth } from "../context/useAuth"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

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
        <main className="contenedorRegistro w-full h-screen bg-green-400">
            <h1 className="text-center lg:w-[800px] xl:w-[700px] md:text-[50px] lg:text-[60px] xl:text-[70px] lg:p-0 text-white bg-gray-950 p-3 relative top-[30px] shadow-[6px_6px_10px_black] text-[50px] flex justify-center w-[300px] m-auto">Registro</h1>
            <div className="flex flex-col gap-5 justify-center items-center mt-20">
                <form className="flex bg-gray-950 flex-col gap-4 p-6 shadow-[8px_8px_12px_black] w-[340px] lg:w-[350px] xl-[400px] lg:p-4" method="post" onSubmit={handleSubmit(submitForm)}>
                    <input className="bg-white w-[292px] lg:w-[318px] xl:w-[318px] lg:text-[10px] xl:text-[13px] p-2 focus:shadow-[5px_5px_5px_black]" type="text" {...register("username",{required:'El nombre de usuario es obligatorio'})} placeholder="Username" />
                    <input className="bg-white w-[292px] lg:w-[318px] xl:w-[318px] lg:text-[10px] xl:text-[13px] p-2 focus:shadow-[5px_5px_5px_black]" type="email" {...register("email",{required:'El correo es obligatorio.'})} placeholder="Correo electrónico" />
                    <input className="bg-white w-[292px] lg:w-[318px] xl:w-[318px] lg:text-[10px] xl:text-[13px] p-2 focus:shadow-[5px_5px_5px_black]" type="password" {...register("password",{required:true,minLength:{value:6,message:'La contraseña debe tener al menos 6 caracteres.'}})} placeholder="Contraseña" />
                    <button className="bg-green-600 text-white p-2 cursor-pointer hover:bg-green-700 lg:text-[10px] xl:text-[13px]" type="submit">Registrarse</button>
                </form>
                <p className="p-3 bg-white lg:text-[12px] lg:p-1">Si ya tenés cuenta <a className="underline text-green-700 font-bold" href="/login">Ingresá</a></p>
            </div>
            {errors &&(
                <p className="text-center text-[25px] mt-3">{errors}</p>
            )}
            {correctRegister &&(
                <p className="text-center text-[25px] mt-3">Usuario registrado correctamente.</p>
            )}
        </main>
        
  )
}

export default RegisterPage
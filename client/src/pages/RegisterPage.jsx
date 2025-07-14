import { useForm } from "react-hook-form"
import { useAuth } from "../context/useAuth"

const RegisterPage = () => {

    const {register,handleSubmit,reset} = useForm()
    const {signUp} = useAuth()

    async function submitForm(values) {
        try {
          await signUp(values)
          reset();
        } catch (error) {
          console.error("Error en el registro:", error);
        }
    }

    return (
        <main className="contenedorRegistro w-full h-screen bg-green-400">
            <h1 className="text-center md:w-[600px] lg:w-[700px] md:text-[60px] lg:text-[65px] text-white bg-gray-950 p-3 relative top-[30px] shadow-[6px_6px_10px_black] text-[50px] flex justify-center w-[300px] m-auto">Registro</h1>
            <div className="flex flex-col gap-5 justify-center items-center mt-20">
                <form className="flex bg-gray-950 flex-col gap-4 p-6 shadow-[8px_8px_12px_black] w-[450px]" method="post" onSubmit={handleSubmit(submitForm)}>
                    <input className="bg-white w-[400px] p-3 focus:shadow-[5px_5px_5px_black]" type="text" {...register("username",{required:'El nombre de usuario es obligatorio'})} placeholder="Username" />
                    <input className="bg-white w-[400px] p-3 focus:shadow-[5px_5px_5px_black]" type="email" {...register("email",{required:'El correo es obligatorio.'})} placeholder="Correo electrónico" />
                    <input className="bg-white w-[400px] p-3 focus:shadow-[5px_5px_5px_black]" type="password" {...register("password",{required:true,minLength:{value:6,message:'La contraseña debe tener al menos 6 caracteres.'}})} placeholder="Contraseña" />
                    <button className="bg-green-600 text-white p-2 cursor-pointer hover:bg-green-700" type="submit">Registrarse</button>
                </form>
                <p className="p-3 bg-white">Si ya tenés cuenta <a className="underline text-green-700 font-bold" href="/login">Ingresá</a></p>
            </div>
        </main>
        
  )
}

export default RegisterPage
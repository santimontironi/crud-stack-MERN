import { useForm } from "react-hook-form"


const RegisterPage = () => {

    const {register,handleSubmit,reset} = useForm()

    function submitForm(values){
        console.log(values)
        reset()
    }

    return (
        <main className="contenedorRegistro w-full h-screen bg-green-400">
            <h1 className="text-center md:w-[600px] lg:w-[700px] md:text-[60px] lg:text-[65px] text-white bg-gray-950 p-3 relative top-[30px] shadow-[6px_6px_10px_black] text-[50px] flex justify-center w-[300px] m-auto">Registro</h1>
            <div className="flex justify-center items-center mt-20">
                <form className="flex flex-col gap-4 border-1 border-white p-5 shadow-[5px_5px_10px_black]" method="post" onSubmit={handleSubmit(submitForm)}>
                    <input className="border-black border-1 w-[300px] p-3 focus:shadow-[5px_5px_5px_black]" type="text" {...register("username",{required:true})} placeholder="Username" />
                    <input className="border-black border-1 w-[300px] p-3 focus:shadow-[5px_5px_5px_black]" type="email" {...register("email",{required:true})} placeholder="Correo electrónico" />
                    <input className="border-black border-1 w-[300px] p-3 focus:shadow-[5px_5px_5px_black]" type="password" {...register("password",{required:true})} placeholder="Contraseña" />
                    <button className="bg-green-800 text-white p-2 cursor-pointer hover:bg-green-950" type="submit">Registrarse</button>
                </form>
            </div>
        </main>
        
  )
}

export default RegisterPage
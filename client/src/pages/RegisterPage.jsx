import { useForm } from "react-hook-form"


const RegisterPage = () => {

    const {register,handleSubmit} = useForm()

    function submitForm(values){
        console.log(values)
    }

    return (
        <div className="contenedorRegister w-full h-screen flex justify-center items-center bg-green-400">
            <form className="flex flex-col gap-4 border-1 border-white p-5 shadow-[5px_5px_10px_black]" method="post" onSubmit={handleSubmit(submitForm)}>
                <input className="border-black border-1 w-[300px] p-3 focus:shadow-[2px_2px_5px_black]" type="text" {...register("username",{required:true})} placeholder="Username" />
                <input className="border-black border-1 w-[300px] p-3 focus:shadow-[2px_2px_5px_black]" type="email" {...register("email",{required:true})} placeholder="Correo electrónico" />
                <input className="border-black border-1 w-[300px] p-3 focus:shadow-[2px_2px_5px_black]" type="password" {...register("password",{required:true})} placeholder="Contraseña" />
                <button className="bg-green-800 text-white p-2 cursor-pointer hover:bg-green-950" type="submit">Register</button>
            </form>
        </div>
  )
}

export default RegisterPage
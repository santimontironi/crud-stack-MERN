import { useForm } from "react-hook-form"


const RegisterPage = () => {

    const {register,handleSubmit} = useForm()

    function submitForm(values){
        console.log(values)
    }

    return (
        <div>
            <form method="post" onSubmit={handleSubmit(submitForm)}>
                <input type="text" {...register("username",{required:true})} />
                <input type="email" {...register("email",{required:true})} />
                <input type="password" {...register("password",{required:true})} />
                <button type="submit">Register</button>
            </form>
        </div>
  )
}

export default RegisterPage
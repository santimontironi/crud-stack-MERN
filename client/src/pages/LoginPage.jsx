import { useForm } from "react-hook-form"
import { useAuth } from "../context/useAuth"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [errorLogin, setErrorLogin] = useState("")
  const [correctLogin, setCorrectLogin] = useState(false)
  
  const navigate = useNavigate()

  const { signIn } = useAuth()

  async function submitForm(values) {
    try {
      await signIn(values)
      reset()
      setErrorLogin("")
      setCorrectLogin(true)
    } catch (error){
      console.log("error completo",error.response)
      if (error.response?.data?.message) {
        setErrorLogin(error.response.data.message)
      }
      setCorrectLogin(false)
    }
  }

  useEffect(() => {
    if (correctLogin) {
      navigate('/tasks')
    }
  },[correctLogin, navigate])

  return (
    <main className="containerLogin">

      <h1 className="">Iniciar Sesión</h1>

      <div className="contentForm">

        <form method="post" onSubmit={handleSubmit(submitForm)}>

          <input type="text" {...register("username",{required:true})} placeholder="Username" />
          {errors.username && (
            <p className="error">El username es requerido</p>
          )}

          <input type="password" {...register("password",{required:true})} placeholder="Contraseña" />
          {errors.password && (
            <p className="error">La contraseña es requerida</p>
          )}

          <button type="submit">Ingresar</button>

          {errorLogin &&(
            <p className="messageError">{errorLogin}</p>
          )}

        </form>
        
      </div>
      
    </main>
  )
}

export default LoginPage





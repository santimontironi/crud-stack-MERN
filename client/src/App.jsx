import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import { AuthProvider } from "./context/AuthProvider"

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<h1 className="text-red-500">APP</h1>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/tasks" element={<h1 className="text-red-500">TASKS</h1>}/>
          <Route path="/addTask" element={<h1 className="text-red-500">ADDTASK</h1>}/>
          <Route path="/task/:id" element={<h1 className="text-red-500">TASK:ID</h1>}/>
          <Route path="/profile" element={<h1 className="text-red-500">PROFILE</h1>}/>
        </Routes>

      </BrowserRouter>
    </AuthProvider>
    
  )
}

export default App
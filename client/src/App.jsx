import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import Profile from "./pages/Profile"
import AddTask from "./pages/AddTask"

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/addTask" element={<AddTask/>}/>
        <Route path="/task/:id" element={<h1 className="text-red-500">TASK:ID</h1>}/>
        <Route path="/profile" element={<h1 className="text-red-500">PROFILE</h1>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
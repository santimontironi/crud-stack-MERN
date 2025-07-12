import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1 className="text-red-500">APP</h1>}/>
        <Route path="/login" element={<h1 className="text-red-500">LOGIN</h1>}/>
        <Route path="/register" element={<h1 className="text-red-500">REGISTER</h1>}/>
        <Route path="/tasks" element={<h1 className="text-red-500">TASKS</h1>}/>
        <Route path="/addTask" element={<h1 className="text-red-500">ADDTASK</h1>}/>
        <Route path="/task/:id" element={<h1 className="text-red-500">TASK:ID</h1>}/>
        <Route path="/profile" element={<h1 className="text-red-500">PROFILE</h1>}/>
      </Routes>
      
    </BrowserRouter>
    
  )
}

export default App
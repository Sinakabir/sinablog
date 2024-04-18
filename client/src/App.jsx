import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import AddBlog from './pages/addblog'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="bg-gray-300 min-h-screen p-0 m-0 w-full">
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add-blog' element={<AddBlog/>}/>
    </Routes>
   </div>
  )
}

export default App

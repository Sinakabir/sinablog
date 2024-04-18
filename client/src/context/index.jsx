import React, { createContext, useState } from 'react'
import { FaGalacticSenate, FaLessThanEqual } from 'react-icons/fa'



export const GloablContext = createContext(null)
const GlobalState = ({children}) => {
  const [formData,setFormData] = useState({
    title: '',
    description : ''
  })
  const [bloglist,setBloglist] = useState([])
  const [isEdit,setIsEdit] = useState(false)
  return (
    <GloablContext.Provider value={{formData,setFormData ,bloglist,setBloglist , isEdit,setIsEdit}}>
      {children}
    </GloablContext.Provider>
  )
}

export default GlobalState
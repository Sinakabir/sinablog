import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { GloablContext } from '../context';
import {FaTrash,FaEdit} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const {bloglist,setBloglist} = useContext(GloablContext)
const navigate = useNavigate()
  async function fetchListOfBlog(){
    const respons = await axios.get('http://localhost:7000/api/blogs')
    const result = await respons.data;
  
    console.log(result);
    if(result && result.blogList && result.blogList.length){
    setBloglist(result.blogList)
    }
    else{
      setBloglist('')
    }
  }

  async function handeldelete(currentid){
    const response = await axios.delete(`http://localhost:7000/api/blogs/delete/${currentid}`);
    const  result = await response.data;

    console.log(result);

    if(result?.message){
      fetchListOfBlog()
    }
  }

  function handleEdit(blogN){
    navigate('/add-blog' , {state : {blogN}})

  }
  
    useEffect(()=>{
    fetchListOfBlog()
    },[])
  return (
    <div className='border-2  p-5 border-gray-600 h-full w-full '>
      <div className='text-5xl font-bold p-5'>Blog List</div>
      
     <div className=' grid grid-cols-3 gap-3 m-3'>
       {
          bloglist && bloglist.length  ?
            bloglist.map((blogItem) => 
          <div className='border-2 h-full w-full items-center flex flex-col justify-center p-3 gap-4'>
            <p className='bg-gray-400 p-4 rounded-lg text-white'>{blogItem.title}</p>
            <p className='p-3 bg-white rounded-lg text-blue-700'>{blogItem.description}</p>
           
           <div className=' cursor-pointer my-4 flex w-full justify-around'>
             <FaTrash onClick={()=>handeldelete(blogItem._id)} />
            <FaEdit onClick={()=> handleEdit(blogItem)} size={24}/>
           </div>
           
          </div>)
          :
          <div className='text-6xl w-full border-4 p-5 '>There is nohting to show</div>
        }
     </div>
       
      

    </div>
  )
}

export default Home
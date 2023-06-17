import { useState } from 'react'
import { useEffect } from 'react';
import '../Component/index.css';
import TextField from '@mui/material/TextField';


const CompanyUI = () => {
const [user, setUser] = useState([])
  
    const fetchData = async() => {
        const res = await fetch("http://localhost:8081/Data");
        setUser(await res.json());
        // console.log("data:", data)
        
      }
      useEffect(()=>{
        fetchData()
    
      },[])





  return (
    <>
       <div className='navbar'>
         <img className='logoi' src='./images/logo1.png'></img>
         <TextField id="outlined-basic" label="Search" variant="outlined" />
       </div>
    </>
  )
}

export default CompanyUI
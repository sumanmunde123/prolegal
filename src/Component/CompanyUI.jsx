import { useState } from 'react'
import { useEffect } from 'react';
import '../Component/index.css';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';




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
         <Button  variant="outlined" startIcon={<SearchIcon />}>
  Search
</Button>
         <div className="bell">
          <NotificationsNoneRoundedIcon />
         </div>
         <div className="bell">
          <img  src='./images/Ellipse.png'></img>
         </div>

         <div className="dropdown">
         <Autocomplete
      disablePortal
      id="combo-box-demo"
  
      sx={{ width: 110 } }
      renderInput={(params) => <TextField {...params} label="John Deo" />}
    />
    <div className="text">Server</div>

         </div>
       </div>

       <div className="sidebar">
       <Button className='color' variant="text">Create a Job</Button>
       </div>
    </>
  )
}

export default CompanyUI
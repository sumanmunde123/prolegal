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
        const res = await fetch("http://localhost:8080/Data");
        const data = await res.json();
        setUser(data)
        console.log("data:", data)
        
      }
      useEffect(()=>{
        fetchData()
    
      },[])


console.log("user", user[0])
  return (
    <>
       <div className='navbar'>
         <img className='logoi' src='./images/logo1.png'></img>
         <Button sx={{ color: 'black',}}  variant="outlined" startIcon={<SearchIcon />}>
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
       <Button  sx={{ color: 'black',}} variant="text">Create a Job</Button>
       </div>





       {/* fetch data */}

       <div className="fetchdata">
        <h3>Create a Job</h3>
        <p>Select Zendex Documents</p>
      <div className="box">
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      size="small"
      sx={{ width: 250 } }
      renderInput={(params) => <TextField {...params} label="" />}
    />
      </div>


      <div className="inside">
    <div className="fetch_i">
      <h3>Company</h3>

      {
        user.length > 0 && user[0].Company.map((e) => {
          return(
            <>
         <div className="boxi">
         <div className="lablei">
            <label>Company Name</label>
            <div>{e.companyName}</div>
          </div>
          <div className="lablei">
            <label>Company Type</label>
            <div>{e.companyType}</div>
          </div>
         </div>
         <div className="lablei">
            <label>Address</label>
            <div>{e.Address}</div>
          </div>
          <div className="lablei">
            <label>Phone</label>
            <div>{e.Phone}</div>
          </div>
            </>
          )
        })
      }
    </div>
    <div className="fetch_i">
    <h3>User</h3>
    {
        user.length > 0 && user[0].User.map((e) => {
          return(
            <>
         <div className="boxi">
         <div className="lablei">
            <label>First Name</label>
            <div>{e.firstName}</div>
          </div>
          <div className="lablei">
            <label>Last Name</label>
            <div>{e.lastName}</div>
          </div>
         </div>
         <div className="lablei">
            <label>Address</label>
            <div>{e.Address}</div>
          </div>
          <div className="lablei">
            <label>Phone</label>
            <div>{e.Phone}</div>
          </div>
            </>
          )
        })
      }
    </div>
    <div className="fetch_i">
      <h3>Server</h3>
    {
        user.length > 0 && user[0].Server.map((e) => {
          return(
            <>
              <div className="lablei">
            <label>States</label>
            <div>{e.states}</div>
          </div>
          <div className="lablei">
            <label>Countries</label>
            <div>{e.countries}</div>
          </div>
          <div className="lablei">
            <label>zipCodes</label>
            <div>{e.zipcodes}</div>
          </div>
         <div className="boxi">
         <div className="lablei">
            <label>Standard Rates</label>
            <div>{e.standardRates}</div>
          </div>
          <div className="lablei">
            <label>Two Day Rates</label>
            <div>{e.TwoDayRates}</div>
          </div>
         </div>
         <div className="boxi">
         <div className="lablei">
            <label>Onde Day Rates</label>
            <div>{e.OneDayRates}</div>
          </div>
          <div className="lablei">
            <label>same Day Rates</label>
            <div>{e.SameDayRate}</div>
          </div>
         </div>
         <div className="lablei">
            <label>Number Of Attempts</label>
            <div>{e.NumberOfAttempts}</div>
          </div>
        
            </>
          )
        })
      }
    </div>
    <div className="fetch_i">
      <h3>Documents</h3>
    {
        user.length > 0 && user[0].Documents.map((e) => {
          return(
            <>
         <div className="boxi">
         <div className="lablei">
            {/* <label>Onde Day Rates</label> */}
            <div>Document 1</div>
          </div>
          <div className="lablei">
           
            <label>{e.Document1}</label>
          </div>
         </div>
         <div className="boxi">
         <div className="lablei">
            {/* <label>Onde Day Rates</label> */}
            <div>Document 2</div>
          </div>
          <div className="lablei">
           
            <label>{e.Document2}</label>
          </div>
         </div>
         <div className="boxi">
         <div className="lablei">
            {/* <label>Onde Day Rates</label> */}
            <div>Document 3</div>
          </div>
          <div className="lablei">
           
            <label>{e.Document3}</label>
          </div>
         </div>
            </>
          )
        })
      }
    </div>
    </div>

       </div>
    </>
  )
}

export default CompanyUI
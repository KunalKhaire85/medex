import { useState } from "react";
import { Header } from "./components/Header";
import { Textbox } from "./components/Textbox";
import { register } from "./Data/register";
import { Dropdown } from "./components/Dropdown";
import { getData, getDataByAxios } from "./components/Services";


const App = () => {
  const companyName = "Medtronic";
  const [profile,setProfile] = useState({FirstName:"",LastName:""});
  const handleChange = (name,value) =>{
    let content = profile;
    content[name] = value;
    setProfile({...content})
  };

  getData("https://restcountries.com/v2/all");
  getDataByAxios("https://restcountries.com/v2/all");
  const countryList = [{
    value:"IN",
    text:"India"
  },
  {
    value:"USA",
    text:"United states"
  }
]
  
  return (
    <div>
      <Header companyName={companyName}></Header>
      <div className="container mt-5">
        <div className="row">
        <Textbox textboxConfig={register.FirstName} handleChange={handleChange}></Textbox>
        <Textbox textboxConfig={register.LastName} handleChange={handleChange}></Textbox>
        <Dropdown dropdownconfig={register.Therapy} handleChange={handleChange} collection={countryList}></Dropdown>
        <button className="btn btn-primary col-md-3" onClick={e=>{
            console.log(profile)
        }}>Register</button>
        {JSON.stringify(profile)}
        </div>
        </div>
      </div>
   
  )
};

export default App;
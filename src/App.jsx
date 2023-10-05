import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Textbox } from "./components/Textbox";
import { register } from "./Data/register";
import { Dropdown } from "./components/Dropdown";
import { getData, getDataByAxios } from "./components/Services";
import { RadioButton } from "./components/RadioButton";
import { Checkbox } from "./components/Checkbox";


const App = () => {
  const companyName = "Medtronic";
  const [profile, setProfile] = useState({ FirstName: "", LastName: "" });
  const [countryList, setCountryList] = useState([]);
  const handleChange = (name, value) => {
    let content = profile;
    content[name] = value;
    setProfile({ ...content })
  };

  useEffect(() => {
    const getCountryList = async () => {
      try {
        let result = await getDataByAxios("https://restcountries.com/v2/all");
        let convertedResult = result.map(x => {
          return { text: x.name, value: x.alpha2Code }
        })
        setCountryList(convertedResult);
      } catch (e) {

      }
    };
    getCountryList();
  }, [])

  //getData("https://restcountries.com/v2/all");
  //getDataByAxios("https://restcountries.com/v2/all");
/*   const countryList = [{
    value: "IN",
    text: "India"
  },
  {
    value: "USA",
    text: "United states"
  }
  ] */

  const genderList = [{
    value:"M",
    text:"Male"
  },
  {
    value:"F",
    text:"Female"

  },{
    value:"DND",
    text:"Do not disclose"
  }]

  return (
    <div>
      <Header companyName={companyName}></Header>
      <div className="container mt-5">
        <div className="row">
          <Textbox textboxConfig={register.FirstName} handleChange={handleChange}></Textbox>
          <Textbox textboxConfig={register.LastName} handleChange={handleChange}></Textbox>
          <Dropdown dropdownconfig={register.Therapy} handleChange={handleChange} collection={countryList}></Dropdown>
          <button className="btn btn-primary col-md-3" onClick={e => {
            console.log(profile)
          }}>Register</button>
          <RadioButton radioButtonconfig={register.Gender} handleChange={handleChange} collection={genderList}></RadioButton>
          <Checkbox checkboxConfig={register.Agree} handleChange={handleChange}></Checkbox>
          {JSON.stringify(profile)}
        </div>
      </div>
    </div>

  )
};

export default App;
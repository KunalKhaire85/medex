import { useState } from "react"

export const RadioButton = ({ radioButtonconfig, handleChange, collection }) => {
    const [radiobutton, setRadioButton] = useState("Male");
    return (
        <div 
        value={radiobutton} 
        onChange={e=>{
            setRadioButton(e.target.value)
            handleChange(e.target.name,e.target.value)
        }}>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
        
      </div>)

};

export const RadioOptions = ({list}) => {
    return list.map((item,index) => {
        return <input type="radio" name="gender" key={index} value={item.value}>{item.text}</input>
    }
    )
    
};




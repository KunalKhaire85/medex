import { useState } from "react"

export const Checkbox = ({ checkboxConfig, handleChange, collection }) => {
    const [checkedOne, setCheckedOne] = useState(false);
    return (
        <div>
          <Checkbox
            label="{checkboxConfig.value}"
            onChange={e=>{
                setCheckedOne(e.target.value)
                handleChange(e.target.name,e.target.value)
            }}
          />
          
        </div>
      );

};

export const CheckBoxOptions = ({list}) => {
    return list.map((item,index) => {
        return <input type="radio" name="gender" key={index} value={item.value}>{item.text}</input>
    }
    )
    
};




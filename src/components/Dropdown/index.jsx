import { useState } from "react"

export const Dropdown = ({dropdownconfig,handleChange,collection}) => {
    const[selectedValue,setSelectedValue] = useState(dropdownconfig.value);
    const [option,selectOption] = useState('');
    return (
        <div className="col-md-3">
            <select name={dropdownconfig.name}
            type={dropdownconfig.type}
            value={selectedValue}
            className="form-control" 
            onChange={e=>{
                setSelectedValue(e.target.value)
                handleChange(e.target.name,e.target.value)
            }
            }>
                <option value=''>{dropdownconfig.placeholder}</option>
                <Options list={collection}/>
            </select>


        </div>
    )
};

export const Options = ({list}) => {
    return list.map((item,index) => {
        return <option key={index} value={item.value}>{item.text}</option>
    }
    )
    
};
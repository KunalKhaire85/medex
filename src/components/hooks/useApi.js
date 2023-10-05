import axios from "axios";
import { useEffect, useState } from "react"

export const useApi = (url,type,payload) => {
    const [apiResult,setData] = useState({
        data : '',
        error : ''
    });
    
    useEffect(async()=>{
        const api = async () => {
            let result , error ;
            try {
                if(type == "get") {
                    const data = await axios.get(url);
                } else if(type == "post") {

                }
            }

        };
        api();
        
    },[])

    
}
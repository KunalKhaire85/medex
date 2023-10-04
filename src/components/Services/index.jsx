import axios from "axios";

export const getData = (url) => {
    fetch(url).then(result => {
        return result.json
    }).then(response =>{
        console.log(JSON.stringify(response));
        return response;
    }).catch(err =>{
        console.log(err);
        return err;
    })

};

export const getDataByAxios = async (url) => {
    try {

        const result = await axios.get(url);
        console.log(result.data);
        return result.data;
    }catch(ex){
        console.log(ex);
        return ex;
    }
};
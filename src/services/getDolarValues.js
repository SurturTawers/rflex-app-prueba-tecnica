import {endpoints} from "../config/endpoints.js";
export const getDolarValues = async () => {
    return fetch(endpoints.getValues,{
        method: 'GET'
    }).then((response) =>{
        if(response.ok) return response.json();
        return response.text().then((msg)=>{
            throw msg;
        });
    }).then((dolar_data)=>{
        return dolar_data;
    }).catch((err)=> {
        console.error("FETCH ERROR ON DOLAR VALUES: ", err);
    });
}
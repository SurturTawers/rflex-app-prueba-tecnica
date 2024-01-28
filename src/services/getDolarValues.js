import {endpoints} from "../config/endpoints.js";

export const getDolarValues = async (desde, hasta) => {
    return fetch(endpoints.getDolarValues+`?fecha_desde=${desde}&fecha_hasta=${hasta}`,{
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
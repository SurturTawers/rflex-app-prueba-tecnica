import {endpoints} from "../config/endpoints.js";

export const getDolarAvailableDates = async () => {
    return fetch(endpoints.getDolarDates,{
        method: 'GET'
    }).then((response) =>{
        if(response.ok) return response.json();
        return response.text().then((msg)=>{
            throw msg;
        });
    }).then((dolar_date_data)=>{
        return dolar_date_data;
    }).catch((err)=> {
        console.error("FETCH ERROR ON DOLAR DATES: ", err);
    });
}
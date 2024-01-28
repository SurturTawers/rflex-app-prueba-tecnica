const api_prefix = 'http://127.0.0.1:8000/api/'//process.env.API_URL;
export const endpoints = {
    getDolarValues: api_prefix+'currencies/dolar',
    getDolarDates: api_prefix+'currencies/dolar/dates'

};
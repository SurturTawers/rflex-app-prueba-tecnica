const api_prefix = import.meta.env.VITE_API_URL;

export const endpoints = {
    getDolarValues: api_prefix+'currencies/dolar',
    getDolarDates: api_prefix+'currencies/dolar/dates'
};
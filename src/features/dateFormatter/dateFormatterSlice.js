import {createSlice} from "@reduxjs/toolkit";

//DEFAULT PARA BUSCAR ENTRE 30 DIAS ATRAS Y HOY
let fecha_hoy = new Date();
const fecha_hasta = fecha_hoy.toISOString().split('T')[0];
fecha_hoy.setDate(fecha_hoy.getDate()-30);
const fecha_desde = fecha_hoy.toISOString().split('T')[0];

export const dateFormatterSlice = createSlice({
   name: 'date_formatter' ,
    initialState: {
       data: {
           dates: [],
           search_dates: {
               desde: fecha_desde,
               desde_formatted: '',
               hasta: fecha_hasta,
               hasta_formatted: ''
           },
           table_values: [],
           graph_values: [],
       }
    },
    reducers: {
       formatter: (state, action) => {
           state.data.dates = action.payload.map((item)=>{
               let formattedDate = new Date(item.fecha).toLocaleDateString('en-GB');
               return {
                   ...item,
                   formatted_date: formattedDate
               }
           })
       },
       valuesDateFormatter: (state,action) => {
           state.data.table_values = action.payload.map((item)=>{
               let formattedDate = new Date(item.fecha).toLocaleDateString('en-GB');
               return {
                   ...item,
                   formatted_date: formattedDate
               }
           });
           state.data.graph_values = action.payload.map((item)=>{
               let formattedDate = new Date(item.fecha).toLocaleDateString('en-GB');
               return {
                   ...item,
                   formatted_date: formattedDate
               }
           }).reverse();
       },
        validInitialFromToDates: (state) => {
           state.data.search_dates.desde = state.data.table_values[state.data.table_values.length-1].fecha;
           state.data.search_dates.desde_formatted = new Date(state.data.table_values[state.data.table_values.length-1].fecha).toLocaleDateString('en-GB');
           state.data.search_dates.hasta = state.data.table_values[0].fecha;
           state.data.search_dates.hasta_formatted = new Date(state.data.table_values[0].fecha).toLocaleDateString('en-GB');
        },
        setSearchDates: (state,action) => {
           console.log(action);
        }
    }
});

export const {formatter, valuesDateFormatter, validInitialFromToDates, setSearchDates} = dateFormatterSlice.actions;

export default dateFormatterSlice.reducer;
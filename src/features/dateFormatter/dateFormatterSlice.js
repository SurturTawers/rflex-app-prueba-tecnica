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
        setSearchDate: (state,action) => {
           const {desde,hasta} = action.payload;
           if(desde) state.data.search_dates.desde = desde;
           if(hasta) state.data.search_dates.hasta = hasta;
        },
        modifyTableCell: (state,action) =>{
            const {itemId, newValue} = action.payload;
            return {
                ...state,
                data: {
                    ...state.data,
                    table_values: state.data.table_values.map((record) => {
                        if(record.id !== itemId) return record;
                        return {
                            ...record,
                            valor: newValue
                        }
                    }),
                    graph_values: state.data.graph_values.map((record) => {
                        if(record.id !== itemId) return record;
                        return {
                            ...record,
                            valor: newValue
                        }
                    }),
                }
            }
        },
        deleteTableCell: (state,action) => {
           const itemId = action.payload;
           return {
               ...state,
               data:{
                   ...state.data,
                   table_values: state.data.table_values.filter((record) => record.id !== itemId),
                   graph_values: state.data.graph_values.filter((record) => record.id !== itemId),
               }
           };
        }
    }
});

export const {
    formatter,
    valuesDateFormatter,
    validInitialFromToDates,
    setSearchDate,
    modifyTableCell,
    deleteTableCell
} = dateFormatterSlice.actions;

export default dateFormatterSlice.reducer;
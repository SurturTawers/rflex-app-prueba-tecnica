import {Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBar.css";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {setSearchDate} from "../../features/dateFormatter/dateFormatterSlice.js";

function SearchBar({handleSubmitFechas}){

    const fechas = useSelector((state) => state.dateFormatter.data.dates);
    const fechasBusqueda = useSelector((state) => state.dateFormatter.data.search_dates);
    const dispatch = useDispatch();

    return (
        <Box sx={{width: '50%', display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
            <FormControl sx={{width: '30%'}} error={fechasBusqueda.desde>=fechasBusqueda.hasta} >
                <InputLabel id="label-select-fecha-desde" >Desde</InputLabel>
                <Select
                    sx={{backgroundColor: 'white', maxHeight: '5rem'}}
                    labelId="label-select-fecha-desde"
                    label="Desde"
                    value={fechasBusqueda.desde}
                    //onChange={(e)=> setDesde(e.target.value)}
                    onChange={(e)=>  dispatch(setSearchDate({desde:e.target.value}))}
                >

                    {
                        fechas ? fechas.map((item) => {
                                return <MenuItem key={item.id} value={item.fecha}>{item.formatted_date}</MenuItem>
                            })
                            : null
                    }
                </Select>
                {fechasBusqueda.desde>=fechasBusqueda.hasta ? <FormHelperText>Debe ser anterior a la fecha "Hasta"</FormHelperText> : null}
            </FormControl>
            <FormControl sx={{width: '30%'}} error={fechasBusqueda.desde>=fechasBusqueda.hasta}>
                <InputLabel id="label-select-fecha-hasta" >Hasta</InputLabel>
                <Select
                    sx={{backgroundColor: 'white'}}
                    labelId="label-select-fecha-hasta"
                    label="Hasta"
                    value={fechasBusqueda.hasta}
                    //onChange={(e) => setHasta(e.target.value)}
                    onChange={(e)=>  dispatch(setSearchDate({hasta: e.target.value}))}
                >
                    {
                        fechas ? fechas.map((item) => {
                                return <MenuItem key={item.id} value={item.fecha}>{item.formatted_date}</MenuItem>
                            })
                            :null
                    }
                </Select>
                {fechasBusqueda.desde>=fechasBusqueda.hasta ? <FormHelperText>Debe ser posterior a la fecha "Desde"</FormHelperText> : null}
            </FormControl>
            <Button variant='contained' onClick={handleSubmitFechas} >
                <SearchIcon/>
                Buscar
            </Button>
        </Box>
    )
}

export default SearchBar;
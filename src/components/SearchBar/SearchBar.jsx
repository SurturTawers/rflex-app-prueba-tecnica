import {Box, Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBar.css";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {setSearchDates} from "../../features/dateFormatter/dateFormatterSlice.js";

function SearchBar({handleSubmitFechas}){
    const fechas = useSelector((state) => state.dateFormatter.data.dates);
    const fechasBusqueda = useSelector((state) => state.dateFormatter.data.search_dates);
    const dispatch = useDispatch();

    //const [desde, setDesde] = useState(fechasBusqueda.desde);
    //const [hasta, setHasta] = useState(fechasBusqueda.hasta);


    return (
        <Box sx={{width: '50%', display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
            <FormControl sx={{width: '30%'}} >
                <InputLabel id="label-select-fecha-desde" >Desde</InputLabel>
                <Select
                    sx={{backgroundColor: 'white', maxHeight: '5rem'}}
                    labelId="label-select-fecha-desde"
                    label="Desde"
                    value={fechasBusqueda.desde}
                    //onChange={(e)=> setDesde(e.target.value)}
                    onChange={(e)=>  dispatch(setSearchDates(e.target.value))}
                >

                    {
                        fechas ? fechas.map((item) => {
                                return <MenuItem key={item.id} value={item.fecha}>{item.formatted_date}</MenuItem>
                            })
                            : null
                    }
                </Select>
            </FormControl>
            <FormControl sx={{width: '30%'}} >
                <InputLabel id="label-select-fecha-hasta" >Hasta</InputLabel>
                <Select
                    sx={{backgroundColor: 'white'}}
                    labelId="label-select-fecha-hasta"
                    label="Hasta"
                    value={fechasBusqueda.hasta}
                    //onChange={(e) => setHasta(e.target.value)}
                    onChange={(e)=>  dispatch(setSearchDates(e.target.value))}
                >
                    {
                        fechas ? fechas.map((item) => {
                                return <MenuItem key={item.id} value={item.fecha}>{item.formatted_date}</MenuItem>
                            })
                            :null
                    }
                </Select>
            </FormControl>
            <Button variant='contained' onClick={() => handleSubmitFechas(desde,hasta)} >
                <SearchIcon/>
                Buscar
            </Button>
        </Box>
    )
}

export default SearchBar;
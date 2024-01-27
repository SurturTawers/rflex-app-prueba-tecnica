import {Box, Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBar.css";
function SearchBar({data}){

    return (
        <Box sx={{width: '50%', display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
            <FormControl sx={{width: '30%'}} >
                <InputLabel id="label-select-fecha-desde" >Desde</InputLabel>
                <Select sx={{backgroundColor: 'white', maxHeight: '5rem'}} labelId="label-select-fecha-desde" label="Desde" >
                    {
                        data.map((item) => {
                           return <MenuItem value={item.fecha}>{item.fecha}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
            <FormControl sx={{width: '30%'}} >
                <InputLabel id="label-select-fecha-hasta" >Hasta</InputLabel>
                <Select sx={{backgroundColor: 'white'}} labelId="label-select-fecha-hasta" label="Hasta">
                    {
                        data.map((item) => {
                            return <MenuItem value={item.fecha}>{item.fecha}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
            <Button variant='contained' >
                <SearchIcon/>
                Buscar
            </Button>
        </Box>
    )
}

export default SearchBar;
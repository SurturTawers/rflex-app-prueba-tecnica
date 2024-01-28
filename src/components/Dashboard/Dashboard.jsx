import DolarGraph from "../DolarGraph/DolarGraph.jsx";
import DolarTable from "../DolarTable/DolarTable.jsx";
import {Container} from "@mui/material";
import SearchBar from "../SearchBar/SearchBar.jsx";
import './Dashboard.css';
import {useEffect, useState} from "react";
import {getDolarValues} from "../../services/getDolarValues.js";
import {getDolarAvailableDates} from "../../services/getDolarAvailableDates.js";
import {useDispatch, useSelector} from "react-redux";
import {
    formatter,
    validInitialFromToDates,
    valuesDateFormatter
} from "../../features/dateFormatter/dateFormatterSlice.js";


function Dashboard(){

    const fechasBusqueda = useSelector((state) => state.dateFormatter.data.search_dates);
    const dispatch = useDispatch();

    useEffect(() => {
        getFechasDolar();
        getValoresDolar();
    },[]);

    const handleSubmitFechas = () => {
        const {desde, hasta} = fechasBusqueda;
        if(desde>=hasta) return;

        getValoresDolar();
    }

    const getFechasDolar = async () => {
        const data = await getDolarAvailableDates();
        dispatch(formatter(data));
    }

    const getValoresDolar = async () =>{
        const data =  await getDolarValues(fechasBusqueda.desde, fechasBusqueda.hasta);
        dispatch(valuesDateFormatter(data));
        dispatch(validInitialFromToDates());
    }

    return (
        <Container maxWidth={false} sx={{display: 'block'}}>
            <SearchBar handleSubmitFechas={handleSubmitFechas} />
            <Container
                maxWidth={false}
                sx={{ marginLeft: 0, marginRight: 0, display: 'flex', flexDirection: 'row', marginTop: '2rem'}}
            >
                    <DolarGraph />
                    <DolarTable />
            </Container>
        </Container>
    )
}

export default Dashboard;
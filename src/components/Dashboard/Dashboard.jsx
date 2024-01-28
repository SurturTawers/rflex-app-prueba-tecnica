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
    //const [fechasBusqueda, setFechasBusqueda] = useState({fecha_desde:fecha_desde,fecha_hasta:fecha_hasta});
    const [fechasBusquedaError, setFechasBusquedaError] = useState(false);

    const fechas = useSelector((state) => state.dateFormatter.data.search_dates);
    const dispatch = useDispatch();

    useEffect(() => {
        getFechasDolar();
        getValoresDolar();
    },[]);

    const handleSubmitFechas = (desde,hasta) => {
        const from = new Date(desde);
        const to = new Date(hasta);
        if(from>=to){
            setFechasBusquedaError(true);
            alert("ERROR FECHAS");
        }else{
            alert("FECHAS CORRECTAS");

        }
        console.log(desde,hasta);
    }

    const getFechasDolar = async () => {
        const data = await getDolarAvailableDates();
        dispatch(formatter(data));
        //setFechas(data);
    }

    const getValoresDolar = async () =>{
        const data =  await getDolarValues(fechas.desde, fechas.hasta);
        dispatch(valuesDateFormatter(data));
        dispatch(validInitialFromToDates());
        //setValoresDolar(data);
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
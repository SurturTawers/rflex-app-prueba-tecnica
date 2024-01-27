import DolarGraph from "../DolarGraph/DolarGraph.jsx";
import DolarTable from "../DolarTable/DolarTable.jsx";
import {Container} from "@mui/material";
import SearchBar from "../SearchBar/SearchBar.jsx";
import './Dashboard.css';

function Dashboard(){


    const data = [
        {
            fecha: "2023-10-11",
            valor: 895.4
        },
        {
            fecha: "2023-10-12",
            valor: 896.4
        },
        {
            fecha: "2023-10-13",
            valor: 890.4
        },
        {
            fecha: "2023-10-14",
            valor: 995.4
        },
        {
            fecha: "2023-10-15",
            valor: 975.4
        },
        {
            fecha: "2023-10-16",
            valor: 895.4
        },
        {
            fecha: "2023-10-17",
            valor: 805.4
        },
        {
            fecha: "2023-10-18",
            valor: 755.4
        },
        {
            fecha: "2023-10-19",
            valor: 865.4
        },
    ];

    return (
        <Container maxWidth={false} sx={{display: 'block'}}>
            <SearchBar data={data} />
            <Container maxWidth={false} sx={{ marginLeft: 0, marginRight: 0, display: 'flex', flexDirection: 'row', marginTop: '2rem'}} >
                <DolarGraph data={data} />
                <DolarTable data={data} />
            </Container>
        </Container>
    )
}

export default Dashboard;
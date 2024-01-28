import {Box} from "@mui/material";
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {useSelector} from "react-redux";

function DolarGraph(){
    const data = useSelector((state) => state.dateFormatter.data.graph_values);
    return (
        <Box sx={{flexGrow:3, overflowX: 'auto', overflowY: 'hidden' }}>
            <LineChart width={1000} height={700} >
                <XAxis dataKey={"formatted_date"}/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip />
                <Line type="monotone" dataKey="valor" data={data} stroke="#8884d8" activeDot={{ r:6}} />
            </LineChart>
        </Box>
    )
}

export default DolarGraph;
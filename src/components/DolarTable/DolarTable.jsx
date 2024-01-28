import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import {useSelector} from "react-redux";

function DolarTable(){
    const data = useSelector((state) => state.dateFormatter.data.table_values);
    return (
        <Box sx={{marginLeft: '2rem', height: 700}}>
            <TableContainer component={Paper} sx={{maxHeight: 700, overflowX: 'hidden'}}>
                <Table stickyHeader sx={{ minWidth: 300}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Valor</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {
                                data ? data.map((item) => {
                                    return (
                                        <TableRow key={item.id} hover role="checkbox" tabIndex={-1}>
                                            <TableCell>{item.formatted_date}</TableCell>
                                            <TableCell>{item.valor}</TableCell>
                                        </TableRow>
                                    )
                                })
                                    : null
                            }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default DolarTable;
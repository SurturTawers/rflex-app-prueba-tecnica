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

function DolarTable({data}){
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
                                data.map((item) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1}>
                                            <TableCell>{item.fecha}</TableCell>
                                            <TableCell>{item.valor}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                            {
                        data.map((item) => {
                            return (
                                <TableRow>
                                    <TableCell>{item.fecha}</TableCell>
                                    <TableCell>{item.valor}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default DolarTable;
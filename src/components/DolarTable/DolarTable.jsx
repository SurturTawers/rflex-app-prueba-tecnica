import {
    Box, Button, Container, Grow, IconButton,
    Paper, Snackbar,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, TextField, Typography,
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {Fragment, useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import {deleteTableCell, modifyTableCell} from "../../features/dateFormatter/dateFormatterSlice.js";
import './DolarTableSnack.css';
import {Text} from "recharts";


function DolarTable(){
    const data = useSelector((state) => state.dateFormatter.data.table_values);
    const dispatch = useDispatch();

    const [openSnack, setOpenSnack] = useState(false);
    const [snackEditMode, setSnackEditMode] = useState(false);

    const [selectedId, setSelectedId] = useState(-1);
    const [selectedRecord, setSelectedRecord] = useState({});
    const [newValor, setNewValor] = useState(0);

    const handleClickSelectItem = (e) => {
        const itemId = Number(e.target.parentElement.id);
        setSelectedId(itemId);
        const record = data.find((item) => item.id === itemId);
        if(record) {
            setSelectedRecord(record);
            setNewValor(record.valor);
            setOpenSnack(true);
            setSnackEditMode(false);
        }
    }

    const handleEditRecord = () => {
        dispatch(modifyTableCell({itemId: selectedId, newValue: newValor}));
    }

    const handleDeleteRecord = () => {
        dispatch(deleteTableCell(selectedId));
        setOpenSnack();
    }

    const handleSnackClose = () => {
        snackEditMode ? setSnackEditMode(false) : setOpenSnack(false)
    }


    const snackButtons = (
        <>
            <Typography variant={'subtitle1'} >{selectedRecord.formatted_date}: {selectedRecord.valor} CLP</Typography>
            <Button variant='contained' onClick={() => setSnackEditMode(true)} >Editar</Button>
            <Button variant='contained' onClick={handleDeleteRecord} color="error" >Eliminar</Button>
        </>
    );

    const snackEditRecord = (
        <>
            <Box sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center', marginBottom: '2rem'}} >
                <Typography variant={'subtitle1'} >{selectedRecord.formatted_date}:</Typography>
                <TextField
                    sx={{width: '5rem', input:{color:'white'} }}
                    variant='standard'
                    id="outlined-number"
                    type="number"
                    defaultValue={selectedRecord.valor}
                    onChange={(e) => setNewValor(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={handleEditRecord}
                >
                    <DoneIcon fontSize="small" />
                </IconButton>
            </Box>
        </>
    );

    const snackBody = (
        <Box >
            <Container sx={{display: 'flex', marginBottom: '0.5rem' }}>
                <Typography variant={'h6'} >Editar Registro</Typography>
                <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={handleSnackClose}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </Container>
            {snackEditMode ? snackEditRecord : snackButtons }
        </Box>
    );

    return (
        <>
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
                                            <TableRow
                                                key={item.id}
                                                id={item.id}
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                onClick={(e)=> handleClickSelectItem(e)}
                                            >
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
            <Snackbar
                sx={{textAlign:'center', marginLeft:0}}
                anchorOrigin={{vertical:'bottom',horizontal:'right'}}
                open={openSnack}
                TransitionComponent={Grow}
                key={'table-snack'}
                action={snackBody}
            />
        </>
    )
}

export default DolarTable;
import {
    Box, Button, Grow, IconButton,
    Paper, Snackbar,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, TextField,
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {Fragment, useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import {deleteTableCell, modifyTableCell} from "../../features/dateFormatter/dateFormatterSlice.js";

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
        setOpenSnack(false);
    }

    const snackButtons = (
        <Fragment >
            <Box>
                <Button variant='contained' onClick={() => setSnackEditMode(true)} >Editar</Button>
                <Button variant='contained' onClick={handleDeleteRecord} color="error" >Eliminar</Button>
            </Box>
            <Box>
                <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={handleSnackClose}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </Box>
        </Fragment>
    );

    const snackEditRecord = (
        <Fragment>
            <TextField
                sx={{color: 'white'}}
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
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleSnackClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </Fragment>

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
                anchorOrigin={{vertical:'bottom',horizontal:'right'}}
                open={openSnack}
                TransitionComponent={Grow}
                message={`${selectedRecord.formatted_date}: ${selectedRecord.valor} CLP`}
                key={'table-snack'}
                action={snackEditMode ? snackEditRecord : snackButtons}
            >
            </Snackbar>
        </>
    )
}

export default DolarTable;
import './Header.css';
import {Box, Container, Typography} from "@mui/material";

function Header(){
    return (
        <Container maxWidth={false} sx={{ backgroundColor: "grey", marginLeft: 0, marginRight: 0, display: 'flex', flexDirection: 'row'}} >
            <Box >
                <img src="/Logo_Rflex.svg" className="rflex-logo" />
            </Box>
            <Box sx={{flex: 1, textAlign: 'center'}}>
                <Typography sx={{marginTop: 0}} variant={'h3'} >Fluctuación del dolar</Typography>
            </Box>
        </Container>
    )
}


export default Header;
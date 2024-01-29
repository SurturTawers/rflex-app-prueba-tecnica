import './Header.css';
import {Box, Container, Typography} from "@mui/material";

function Header(){
    return (
        <Container maxWidth={false} sx={{background: 'linear-gradient(45deg, #D7E1FF,#B0C1EA )', marginLeft: 0, marginRight: 0, display: 'flex', flexDirection: 'row'}} >
            <Box >
                <img src="/Logo_Rflex.svg" className="rflex-logo" />
            </Box>
            <Box sx={{flex: 1, textAlign: 'center'}}>
                <Typography sx={{color: '#ffffff',marginTop: 2}} variant={'h3'} >Fluctuación del dólar</Typography>
            </Box>
        </Container>
    )
}


export default Header;
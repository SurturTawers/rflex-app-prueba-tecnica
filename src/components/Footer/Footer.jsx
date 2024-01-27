import {Container, Typography} from "@mui/material";

function Footer(){
    return (
        <Container maxWidth={false} sx={{backgroundColor: 'grey', height:'8rem', textAlign: 'center', position: 'absolute', left: 0, right: 0, bottom: 0}}>
            <Typography variant={'h5'}>David Torres Gallardo</Typography>
            <Typography variant={'h6'}>davtorresga@gmail.com</Typography>
            <Typography variant={'h6'}>Github</Typography>
        </Container>
    )
}

export default Footer;
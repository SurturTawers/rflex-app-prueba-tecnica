import {Container, Link, Typography} from "@mui/material";

function Footer(){
    return (
        <Container maxWidth={false} sx={{backgroundColor: '#66bdb2', height:'8rem', textAlign: 'center', paddingTop:  '1rem', position: 'absolute', left: 0, right: 0, bottom: 0}}>
            <Typography variant={'h5'}>David Torres Gallardo</Typography>
            <Typography variant={'h6'}>davtorresga@gmail.com</Typography>
            <Link href={'https://github.com/SurturTawers'} underline='hover'sx={{color:'#FFFFFF'}} >Github</Link>
        </Container>
    )
}

export default Footer;
import {Box, Container, Link, Typography} from "@mui/material";

function Footer(){
    return (
        <Container maxWidth={false} sx={{backgroundColor: '#66bdb2', height:'8rem', textAlign: 'center', paddingTop:  '1rem', position: 'absolute', left: 0, right: 0, bottom: 0}}>
            <Typography variant={'h5'}>David Torres Gallardo</Typography>
            <Typography variant={'h6'}>davtorresga@gmail.com</Typography>
            <Box sx={{display: 'flex', justifyContent: 'space-between', marginLeft:'45%', marginRight: '45%'}}  >
                <Box>
                    <img src={'/github_logo.png'} height={'20px'} width={'20px'}/>
                    <Link href={'https://github.com/SurturTawers/rflex-app-prueba-tecnica.git'} underline='hover'sx={{color:'#FFFFFF', marginLeft:'0.5rem'}} >APP</Link>
                </Box>
                <Box>
                    <img src={'/github_logo.png'} height={'20px'} width={'20px'}/>
                    <Link href={'https://github.com/SurturTawers/rflex-api-prueba-tecnica.git'} underline='hover'sx={{color:'#FFFFFF', marginLeft:'0.5rem'}} >API</Link>
                </Box>
            </Box>
        </Container>
    )
}

export default Footer;
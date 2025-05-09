import { Stack, Typography } from '@mui/material';

export default function Header() {
    return (
        <Stack direction='row' spacing={4} justifyContent={'space-evenly'}>
            <img src="/big_paw_icon.png" width={100} height={100}></img>
            <Stack spacing={2}>
                <Typography 
                    variant='h2' 
                    fontFamily={'Lilita One'} 
                    fontSize={70}
                    sx={{ fontSize: {xs: '3rem', sm: '4rem', md: '4rem', lg: '5rem'}}}
                    >Can we go for a walk?</Typography>
                <Typography variant='h5' sx={{ fontSize: {xs: '1.5rem', sm: '1.7rem', md: '1.7rem', lg: '2.5rem'}}}>Check if it's safe to go out with your pets !</Typography>
            </Stack>
            <img src="/big_paw_icon.png" width={100} height={100}></img>
        </Stack>
    )
}
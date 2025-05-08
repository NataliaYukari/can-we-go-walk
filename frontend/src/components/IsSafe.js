

import { Card, CardMedia, CardContent, Typography, Stack } from '@mui/material';

export default function IsSafe({ weather }) {


    return (
        <Card 
        sx={{ 
            padding: {xs: 2, sm: 4, md: 6},
            width:{xs: '100%', sm: '80%', md: '100%'},
            margin: 'auto'
        }}
        >
        <Stack direction="row" spacing={2} justifyContent={'space-around'}>
            <CardMedia 
                sx={{
                    width: {xs: '100px', sm: '200px', md: '300px'}, 
                    height: {xs: '100px', sm: '200px', md: '300px'},  
                    margin:'auto' 
                }}
                image="https://assets.hgbrasil.com/weather/icons/conditions/rain.svg"
                title="current weather icon"
            ></CardMedia>
            <Stack sx={{justifyContent:'center' }}>
                <CardContent>
                    <Typography variant='h3'>Good to go!</Typography>
                    <Typography variant='h4'>Conditions are good</Typography>
                </CardContent>
            </Stack>
        </Stack>
    </Card>
    )
}
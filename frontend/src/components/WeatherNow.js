import { Card, Box, CardContent, CardMedia, Typography, Stack, CircularProgress } from '@mui/material';
import { useState } from 'react';

export default function WeatherNow( { weather, loading }) {
    const [imgError, setImgError] = useState(false);

    const imageLink = imgError
    ? '/error.jpg'
    : `https://assets.hgbrasil.com/weather/icons/conditions/${weather?.condition_slug}.svg`;

    if (loading) {
        return (
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f0f0f0'
                }}
            >
                <CircularProgress/>
            </Box>
        );
    }

    return (
    <Card 
        sx={{ 
            padding: {xs: 2, sm: 4, md: 6},
            width:{xs: '100%', sm: '80%', md: '100%'},
            margin: 'auto'
        }}
        > 
        <CardMedia 
            sx={{
                width: {xs: '200px', sm: '300px', md: '300px'}, 
                height: {xs: '200px', sm: '300px', md: '300px'},  
                margin:'auto' 
            }}
            image= {imageLink}
            title="current weather icon"
            onError= {() => setImgError(true)}
        ></CardMedia>   
        
        <CardContent>
            <Stack spacing={2}>
                <Typography variant='h3'>{weather?.temp ?? 'Loading'} ºC</Typography>
                <Typography variant='h4'>{weather?.city ?? 'Loading'}</Typography>
                <Typography variant='h6'>{weather?.description ?? 'Loading'}</Typography>
                <br></br>
                <Stack direction={'row'} spacing={4} justifyContent={'space-around'}>
                    <Typography variant='h5'>Data: {weather?.date ?? 'Loading'}</Typography>
                    <Typography variant='h5'>Horário: {weather?.time ?? 'Loading'}</Typography>
                    <Typography variant='h5' >Humidade: {weather?.humidity ?? 'Loading'} %</Typography>
                </Stack>
            </Stack>
        </CardContent>
    </Card>
    )
}
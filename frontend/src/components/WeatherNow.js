import { Card, CardActions, CardContent, CardMedia, Typography, Grid, Stack } from '@mui/material';

export default function WeatherNow( { weather }) {

    const imageLink = `https://assets.hgbrasil.com/weather/icons/conditions/${weather?.condition_slug ?? 'rain'}.svg`

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
            ></CardMedia>

            <CardContent>
                <Stack spacing={2}>
                    <Typography variant='h3'>{weather?.temp ?? 'Loading'} ºC</Typography>
                    <Typography variant='h6'>{weather?.description ?? 'Loading'}</Typography>   
                    <Typography variant='h4'>{weather?.city ?? 'Loading'}</Typography>

                    <Stack direction={'row'} spacing={4} justifyContent={'space-around'}>
                        <Typography variant='h5'>{weather?.date ?? 'Loading'}</Typography>
                        <Typography variant='h5'>{weather?.time ?? 'Loading'}</Typography>
                        <Typography variant='h5'>{weather?.humidity ?? 'Loading'} %</Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}
import { useState, useEffect } from 'react';

import { Card, CardMedia, CardContent, Typography, Stack, Box, CircularProgress } from '@mui/material';

export default function IsSafe({ weather }) {
    const [dogImg, setDogImg] = useState('alert');
    const [imgError, setImgError] = useState(false);
    const [title, setTitle] = useState('Attention!');
    const [subtitle, setSubtitle] = useState('Unavailable service');

    useEffect (() => {
        if (!weather) return;
        
        let checkCondition = ''
        let checkTemp = ''

        const badConditions = ['storm', 'snow', 'hail', 'rain'];
        const alertConditions = ['cloudly_day', 'cloudly_night', 'fog'];

        checkCondition = 'happy';
        if (badConditions.includes(weather.condition_slug)) {
            checkCondition = 'inside';
        } else if (alertConditions.includes(weather.condition_slug)) {
            checkCondition = 'alert';
        }

        checkTemp = 'happy';
        if (weather.temp > 32 || weather.temp < 8) {
            checkTemp = 'inside';
        } else if (weather.temp > 27 || weather.temp < 15){
            checkTemp = 'alert';
        }

        if (checkCondition === 'inside' || checkTemp === 'inside') {
            setDogImg('inside');
            setTitle('Not good...');
            setSubtitle('Better stay inside');

        } else if (checkCondition === 'happy' && checkTemp === 'happy') {
            setDogImg('happy');
            setTitle('Good to go!');
            setSubtitle(`Let's go for a walk!`);

        } else if (checkCondition === 'alert' || checkTemp === 'alert') {
            setDogImg('alert');
            setTitle('Go with caution');
            setSubtitle('Check if conditions are good while you go');

        } else {
            return "https://placehold.co/600x400/png"
        }
    }, [weather]);

    const imgLink = imgError
    ? 'https://placehold.co/600x400/png'
    : `/${dogImg}_dog.jpg`;

    return (
        <Card 
            sx={{ 
                padding: {xs: 2, sm: 4, md: 6},
                width:{xs: '100%', sm: '80%', md: '100%'},
                margin: 'auto'
            }}
        >
            <Stack direction="row" spacing={2} justifyContent={'space-around'}>
                {!imgError ? (
                    <CardMedia 
                        sx={{
                            width: {xs: '150px', sm: '200px', md: '300px'}, 
                            height: {xs: '150px', sm: '200px', md: '300px'},  
                            margin:'auto' 
                        }}
                        image={imgLink}
                        title="current weather icon"
                    ></CardMedia>
                    ) : (
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
                        <CircularProgress />
                    </Box>) 
                }
                <Stack sx={{justifyContent:'center' }}>
                    <CardContent>
                        <Typography variant='h3' sx={{ fontSize: {xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem'}}}>{title}</Typography>
                        <Typography variant='h4'sx={{ fontSize: {xs: '1.5rem', sm: '2rem', md: '2rem', lg: '2.5rem'}}}>{subtitle}</Typography>
                    </CardContent>
                </Stack>
            </Stack>
        </Card>
    )
}
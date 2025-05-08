import { Stack, Typography } from '@mui/material';

export default function Header() {
    return (
        <Stack spacing={2}>
            <Typography variant='h2'>Can we go for a walk?</Typography>
            <Typography variant='h5'>Check if it's safe to go out with your pets !</Typography>
        </Stack>
    )
}
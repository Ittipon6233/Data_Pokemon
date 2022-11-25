import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Loading from "../img/loading.gif";
import Background from "../img/loading2.gif";
import { Container, createTheme } from '@mui/system';


export default function DisplayPokemon({ info }) {
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        setisLoading(true);
        setisLoading(false);
    }, []);

    return (
        isLoading ? (<img style={{ display: 'block', margin: 'auto'}} width="100%" src={Loading} />) 
        : (
            <Box sx={{
                backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat'
            }}>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {info.name}
                </Container>
            </Box>
        )
    );
}

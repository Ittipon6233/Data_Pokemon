import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Loading from "../img/loading.gif";
import Background from "../img/loading2.gif";
import { Container, createTheme } from '@mui/system';
import {AppContext} from "./DisplayAllPokemon";
import { useContext } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function DisplayPokemon() {
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
                </Container>
            </Box>
        )
    );
}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Button, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import { Remove } from '@mui/icons-material';
import { Container, createTheme } from '@mui/system';
import "../css/style.css";
import Loading from "../img/loading.gif";
import Background from "../img/bg.jpg";
import DisplayPokemon from "./DisplayPokemon";
import { Navigate, Route, Router, useNavigate, useNavigation } from 'react-router-dom';

export default function DisplayAllPokemon({ pokemon }) {
    const [isLoading, setisLoading] = useState(false);
    var [result, setResult] = useState([]);
    let i = 0;

    useEffect(() => {
        setisLoading(true);
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1154")
            .then((res) => res.json())
            .then(async (data) => {
                console.log(data.results.length);

                for (i; i < data.results.length; i++) {
                    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data.results[i].name}`)
                    if (i != 0) {
                        result.push(res.data);
                    }
                }
                console.log(result.length);

            })
            .finally(async () => {
                setisLoading(false);
            }
            )
            .catch((err) => console.log(err))

    }, []);

    let flag = false;

    return (
        isLoading ? (<img style={{ display: 'block', margin: 'auto' }} width="100%" src={Loading} />)
            : (
                <Box sx={{
                    backgroundImage: `url(${Background})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'repeat'
                }}>
                    <Container sx={{ py: 8 }} maxWidth="md">
                        <Grid container spacing={4}>
                            {pokemon != "" ? (
                                result.map((val, i) => (
                                    flag = false,
                                    val.types.map(t => {
                                        if (t.type.name.toLowerCase().includes(pokemon.toLowerCase())) {
                                            flag = true
                                        }
                                    }),
                                    val.abilities.map(a => {
                                        if (a.ability.name.toLowerCase().includes(pokemon.toLowerCase())) {
                                            flag = true
                                        }
                                    }),
                                    val.name.toLowerCase().includes(pokemon.toLowerCase())
                                        || String(val.base_experience).includes(pokemon.toLowerCase())
                                        || flag
                                        ? (
                                            <Grid item key={i} xs={12} sm={6} md={4}>
                                                <Card
                                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column', color: 'white' }}
                                                >
                                                    <CardMedia
                                                        component="img"
                                                        sx={{
                                                            "&:hover": {
                                                                backgroundColor: 'rgb(192, 211, 255, 0.5)'
                                                            },
                                                            // 16:9
                                                            pt: '10%',
                                                        }}
                                                        image={val.sprites.front_default}
                                                        alt={val.name}
                                                    />
                                                    <CardContent container spacing={4} sx={{ flexGrow: 1, backgroundColor: 'rgb(16, 14, 14, 0.8)' }}>
                                                        <Typography gutterBottom variant="h5" component="h2"
                                                            sx={{
                                                                "&:hover": {
                                                                    color: 'rgb(82, 56, 252, 0.7)'
                                                                },
                                                            }}>
                                                            <h3>{val.name}</h3>
                                                        </Typography>
                                                        <Typography>
                                                            <h3>{val.base_experience}</h3>
                                                        </Typography>
                                                        <Typography sx={{ margin: '5px 0' }}>
                                                            Types: {val.types.map((t, i) => (
                                                                t.type.name.toLowerCase() == 'normal' ? (
                                                                    <Card sx={{
                                                                        padding: '0px 10px',
                                                                        margin: '0px 2px', display: 'inline-block',
                                                                        flexGrow: 1, color: 'white',
                                                                        backgroundColor: 'rgb(168, 168, 120)'
                                                                    }}
                                                                        onClick>
                                                                        {t.type.name}
                                                                    </Card>
                                                                ) :
                                                                    t.type.name.toLowerCase() == 'fire' ? (
                                                                        <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(240, 128, 48)' }}>{t.type.name}</Card>
                                                                ) :
                                                                    t.type.name.toLowerCase() == 'fighting' ? (
                                                                        <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(192, 48, 40)' }}>{t.type.name}</Card>
                                                                ) :
                                                                    t.type.name.toLowerCase() == 'water' ? (
                                                                        <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(104, 144, 240)' }}>{t.type.name}</Card>
                                                                ) :
                                                                    t.type.name.toLowerCase() == 'flying' ? (
                                                                        <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(168, 144, 240)' }}>{t.type.name}</Card>
                                                                ) :
                                                                    t.type.name.toLowerCase() == 'grass' ? (
                                                                        <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(120, 200, 80)' }}>{t.type.name}</Card>
                                                                ) :
                                                                    t.type.name.toLowerCase() == 'poison' ? (
                                                                        <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(160, 64, 160)' }}>{t.type.name}</Card>
                                                                ) :
                                                                    t.type.name.toLowerCase() == 'electric' ? (
                                                                        <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(248, 208, 48)' }}>{t.type.name}</Card>
                                                                ) :
                                                                    t.type.name.toLowerCase() == 'ground' ? (
                                                                        <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(224, 192, 104)' }}>{t.type.name}</Card>
                                                                ) :
                                                                    t.type.name.toLowerCase() =='psychic' ? (
                                                                        <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(201, 94, 126)' }}>{t.type.name}</Card>
                                                                ) :
                                                                                                                                                                            t.type.name.toLowerCase() == 'rock' ? (
                                                                        <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(184, 160, 56)' }}>{t.type.name}</Card> 
                                                                ) :
                                                                                                                                                                            t.type.name.toLowerCase() == 'ice' ? (
                                                                        <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(152, 216, 216)' }}>{t.type.name}</Card>
                                                                                                                                                                        ) :
                                                                    t.type.name.toLowerCase() == 'bug' ? (
                                                                        <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(168, 184, 32)' }}>{t.type.name}</Card>
                                                                ) :
                                                                    t.type.name.toLowerCase() == 'dragon' ? (
                                                                        <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(112, 56, 248)' }}>{t.type.name}</Card>
                                                                ) :
                                                                    t.type.name.toLowerCase() == 'ghost' ? (
                                                                        <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(112, 88, 152)' }}>{t.type.name}</Card>
                                                                ) :
                                                                    t.type.name.toLowerCase() == 'dark' ? (
                                                                        <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(112, 88, 72)' }}>{t.type.name}</Card>
                                                                ) :
                                                                    t.type.name.toLowerCase() == 'steel' ? (
                                                                        <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(184, 184, 208)' }}>{t.type.name}</Card>
                                                                ) :
                                                                    t.type.name.toLowerCase() == 'fairy' ? (
                                                                        <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(238, 153, 172)' }}>{t.type.name}</Card>
                                                                ) : (
                                                                    <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(104, 160, 144)' }}>{t.type.name}</Card>
                                                                )
                                                            ))}
                                                        </Typography>
                                                        <Typography>
                                                            Abilities: {val.abilities.map((a, i) => (
                                                                i != val.abilities.length - 1 ? (a.ability.name) + '/' : (a.ability.name)
                                                            ))}
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        ) : (i != result.length - 1 ? '' : 'Pokemon not found!')
                                ))

                            )
                                : (
                                    result.map((val, i) => (
                                        <Grid item key={i} xs={12} sm={6} md={4}>
                                            <Card
                                                sx={{ height: '100%', display: 'flex', flexDirection: 'column', color: 'white' }}
                                            >
                                            <Route path={`/pokemon/:${val.name}`} >
                                                <CardMedia
                                                component="img" 
                                                sx={{
                                                    "&:hover": {
                                                        backgroundColor: 'rgb(192, 211, 255, 0.5)'
                                                    },
                                                    // 16:9
                                                    pt: '10%',
                                                }}
                                                image={val.sprites.front_default}
                                                alt={val.name}
                                            /></Route>
                                                <CardContent sx={{ flexGrow: 1, backgroundColor: 'rgb(16, 14, 14, 0.8)' }}>
                                                    <Typography gutterBottom variant="h5" component="h2"
                                                        sx={{
                                                            "&:hover": {
                                                                color: 'rgb(82, 56, 252, 0.7)'
                                                            },
                                                        }}>
                                                        <h3>{val.name}</h3>
                                                    </Typography>
                                                    <Typography>
                                                        <h3>{val.base_experience}</h3>
                                                    </Typography>
                                                    <Typography sx={{ margin: '5px 0' }}>
                                                        Types: {val.types.map((t, i) => (
                                                            t.type.name.toLowerCase() == 'normal' ? (
                                                                <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(168, 168, 120)' }}>{t.type.name}</Card>
                                                            ) :
                                                                t.type.name.toLowerCase() == 'fire' ? (
                                                                    <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(240, 128, 48)' }}>{t.type.name}</Card>
                                                            ) :
                                                            t.type.name.toLowerCase() == 'fighting' ? (
                                                                <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(192, 48, 40)' }}>{t.type.name}</Card>
                                                            ) :
                                                            t.type.name.toLowerCase() == 'water' ? (
                                                                <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(104, 144, 240)' }}>{t.type.name}</Card>
                                                            ) :
                                                            t.type.name.toLowerCase() == 'flying' ? (
                                                                <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(168, 144, 240)' }}>{t.type.name}</Card>
                                                            ) :
                                                            t.type.name.toLowerCase() == 'grass' ? (
                                                                <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(120, 200, 80)' }}>{t.type.name}</Card>
                                                            ) :
                                                            t.type.name.toLowerCase() == 'poison' ? (
                                                                <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(160, 64, 160)' }}>{t.type.name}</Card>
                                                            ) :
                                                            t.type.name.toLowerCase() == 'electric' ? (
                                                                <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(248, 208, 48)' }}>{t.type.name}</Card>
                                                            ) :
                                                            t.type.name.toLowerCase() == 'ground' ? (
                                                                <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(224, 192, 104)' }}>{t.type.name}</Card>
                                                            ) :
                                                            t.type.name.toLowerCase() == 'psychic' ? (
                                                                <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(201, 94, 126)' }}>{t.type.name}</Card>
                                                            ) :
                                                            t.type.name.toLowerCase() == 'rock' ? (
                                                                <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(184, 160, 56)' }}>{t.type.name}</Card>
                                                            ) :
                                                            t.type.name.toLowerCase() == 'ice' ? (
                                                                <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(152, 216, 216)' }}>{t.type.name}</Card>
                                                            ) :
                                                            t.type.name.toLowerCase() == 'bug' ? (
                                                                <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(168, 184, 32)' }}>{t.type.name}</Card>
                                                            ) :
                                                            t.type.name.toLowerCase() == 'dragon' ? (
                                                                <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(112, 56, 248)' }}>{t.type.name}</Card>
                                                            ) :
                                                            t.type.name.toLowerCase() == 'ghost' ? (
                                                                <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(112, 88, 152)' }}>{t.type.name}</Card>
                                                            ) :
                                                            t.type.name.toLowerCase() == 'dark' ? (
                                                                <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(112, 88, 72)' }}>{t.type.name}</Card>
                                                            ) :
                                                            t.type.name.toLowerCase() == 'steel' ? (
                                                                <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(184, 184, 208)' }}>{t.type.name}</Card>
                                                            ) :
                                                            t.type.name.toLowerCase() == 'fairy' ? (
                                                                <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(238, 153, 172)' }}>{t.type.name}</Card>
                                                            ) : (
                                                                <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(104, 160, 144)' }}>{t.type.name}</Card>
                                                            )
                                                        ))}
                                                    </Typography>
                                                    <Typography>
                                                        Abilities: {val.abilities.map((a, i) => (
                                                            i != val.abilities.length - 1 ? (a.ability.name) + '/' : (a.ability.name)
                                                        ))}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))
                                )
                            }
                        </Grid>
                    </Container>
                </Box>
            )
    );
}
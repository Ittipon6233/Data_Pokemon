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
import { Navigate, Route, Router, Routes, useNavigate, useNavigation } from 'react-router-dom';
import { createContext } from 'react';
import BackgroundName from "../img/loading2.gif";
import BackgroundName1 from "../img/loading4.png";
import BackgroundShiny from "../img/bg-shiny.png";


export default function DisplayAllPokemon({ pokemon }) {
    const [isLoading, setisLoading] = useState(false);
    var [result, setResult] = useState([]);
    var [detail, setDetail] = useState("");
    let i = 0;

    function handleShowResult(val,i){
        return (
            <Grid item key={i} xs={12} sm={6} md={4}>
                <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column', color: 'white' }}
                >
                <Box sx={{ flexGrow: 1, backgroundColor: 'rgb(16, 14, 14, 0.8)' }}>
                        <Typography onClick={() => setDetail(val)}
                                gutterBottom 
                                variant="h5"       
                                component="h2"
                                sx={{
                                    "&:hover": {
                                        color: 'rgb(82, 56, 252, 0.7)'
                                    },
                                }}>
                                    
                                { <h3>{val.name}</h3> }
                        </Typography>
                </Box>
                    <CardMedia onClick={() => setDetail(val)}
                    component="img" 
                    sx={{
                        backgroundImage: `url(${BackgroundName})`,
                        "&:hover": {
                            backgroundImage: `url(${BackgroundName1})`,
                        },
                        // 16:9
                        pt: '10%',
                    }}
                    image={val.sprites.front_default}
                    alt={val.name}
                />
                    <CardContent sx={{ flexGrow: 1, backgroundColor: 'rgb(16, 14, 14, 0.8)' }}>
                        <Typography>
                            {val.id < 10 
                            ? (<h3>#00{val.id}</h3>) 
                            : val.id < 100 
                            ? (<h3>#0{val.id}</h3> )
                            : (<h3>#{val.id}</h3>)}
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
                                <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(0, 0, 0)' }}>
                                {a.ability.name}</Card>
                            ))}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    }

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
        : detail ? (
            <Box sx={{
                backgroundImage: `url(${BackgroundName})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat',
                margin: 'auto'
            }}>
                <Card sx={{ color: 'white', backgroundColor: 'black'}}>
                    <Typography gutterBottom variant="h5">
                        {detail.id < 10 
                        ? (<h1>#00{detail.id}</h1>) 
                        : detail.id < 100 
                        ? (<h1>#0{detail.id}</h1> )
                        : (<h1>#{detail.id}</h1>)}
                          <h1>{detail.name}</h1> 
                    </Typography>
                </Card>
                    
                <Container sx={{ py: 5 }} >
                    <Grid>
                        <Card>
                            <CardMedia 
                                sx={{
                                    backgroundImage: `url(${Loading})`,
                                    // 16:9
                                }}
                                alt={detail.name}
                            >
                                <img width="30%" src={detail.sprites.other['official-artwork'].front_default} />
                            </CardMedia>
                            <Typography>
                                <h3>Base Experience: {detail.base_experience}</h3>
                            </Typography>
                            <Typography sx={{ margin: '5px 0' }}>
                                Types: {detail.types.map((t, i) => (
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
                                Abilities: {detail.abilities.map((a, i) => (
                                    <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(0, 0, 0)' }}>
                                    {a.ability.name}</Card>
                                ))}
                            </Typography>
                            <Typography>
                                <Card sx={{ padding: '0px 10px', margin: '0px 2px', display:'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(0, 0, 0)'}}>Height {detail.height} / Weight {detail.weight}</Card>
                            </Typography>
                            <Typography>
                                Stats: {detail.stats.map((s, i) => (
                                    <Card sx={{ padding: '0px 10px', margin: '0px 2px', display: 'inline-block', flexGrow: 1, color: 'white', backgroundColor: 'rgb(0, 0, 0)' }}>
                                    {s.stat.name} {s.base_stat}</Card>
                                ))}
                            </Typography>
                            {detail.sprites.other.home.front_shiny
                            ? (
                                <Typography>
                                        <Card sx={{ padding: '0px 5px', margin: '0px', color: 'white', backgroundColor: 'rgb(0, 0, 0)' }}>
                                            <h2>Shiny</h2>
                                        </Card>
                                </Typography>
                            ) : ('')}
                                <CardMedia  
                                    sx={{
                                        backgroundImage: `url(${Background})`,
                                        // 16:9
                                    }}
                                    alt={detail.name+" shiny"}
                                >
                                    <img width="30%" src={detail.sprites.other.home.front_shiny} />
                                </CardMedia>
                            
                        </Card>
                    </Grid>
                </Container>
            </Box>
        ) : (
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
                                            handleShowResult(val,i)
                                        ) : (i != result.length - 1 ? '' : 'Pokemon not found!')
                                ))

                            )
                                : (
                                    result.map((val, i) => (
                                        handleShowResult(val,i)
                                    ))
                                )
                            }
                        </Grid>
                    </Container>
                </Box>
            )
    );
}
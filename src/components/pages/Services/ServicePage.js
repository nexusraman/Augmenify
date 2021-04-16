import { Card, Typography, CardActionArea, Box, Container } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ServicesData from '../../../util/ServicesData'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
export default function ArtificialIntelligence(props) {
    const classes = useStyles();
    let serv;
    if (props.location.pathname === '/ArtificialIntelligence') {
        serv = ServicesData.Artificial;
    } if (props.location.pathname === '/WebDevelopment') {
        serv = ServicesData.WebDev;
    } if (props.location.pathname === '/MobileDevelopment') {
        serv = ServicesData.MobDev;
    } if (props.location.pathname === '/RoboticsAutomation') {
        serv = ServicesData.Robotic;
    } if (props.location.pathname === '/FinancialServices') {
        serv = ServicesData.Financial;
    } if (props.location.pathname === '/ITInfrastructure') {
        serv = ServicesData.ITInfrastructure;
    }
    return (
        <React.Fragment>

            <>
                <div>
                    {console.log(serv)}
                </div>
                <div className='AI-main'>
                    <img className='ImageContainer' alt='contact' src={serv.imageLink}></img>
                    <div className='centered'>{serv.headerCaption}</div>
                </div>


                <Typography variant='h2' align='center' m={2}>
                    <Box letterSpacing={1} m={3}>{serv.name}</Box>
                </Typography>
                <Typography variant='subtitle1' align='center'>
                    <Box letterSpacing={1} m={3}>{serv.caption}</Box></Typography>
                <div>
                    {serv.services.map((service) => (
                        <Container maxWidth="lg">

                            <Grid className='service-cards' width="auto" item xs={12} md={12} >
                                <Box boxShadow={10}>
                                    <Card className={classes.root} variant="outlined">
                                        <CardActionArea>
                                            <Typography align='center' gutterBottom variant="h4" component="h6">
                                                <Box letterSpacing={5} m={1}>
                                                    {service.title}
                                                </Box>
                                            </Typography>
                                            <Typography letterSpacing={6} variant="h6" color="textSecondary" component="p">
                                                <Box className='boxMargin' m={3} letterSpacing={1} lineHeight={1.5}>
                                                    {service.description}
                                                </Box>

                                            </Typography>



                                        </CardActionArea>

                                    </Card>
                                </Box>
                            </Grid>

                        </Container>

                    ))}
                </div>
            </>


        </React.Fragment >
    )
}

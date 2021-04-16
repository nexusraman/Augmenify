import React, { useState } from 'react'
import Services from '../util/Services'
import './MainServices.css'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardMedia,
    CardActionArea,
    Grow,
    Container,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    withStyles,
    Link
} from '@material-ui/core/'

const styles = {
    root: {
        flexGrow: 1,
        marginBottom: '20px'
    },
};

function MainServices(props) {
    const { classes } = props;
    const url = "http://localhost:1337";
    const [projectDialog, setProjectDialog] = useState(false);

    return (
        <div className='cards'>

            <div className={classes.root}>
                <Typography align='center' margin='20px'>
                    <h1>Our Services</h1>
                </Typography>
            </div>

            <Container>
                <Grid container spacing={4} justify="center" alignItems="stretch" >
                    {props.services.map((service, index) => (
                        <>
                            <Grid item xs={12} sm={8} md={6} lg={4}>
                                <Grow in timeout={2000}>
                                    <CardActionArea>
                                        {console.log(service)}
                                        <Card className='customCard' onClick={() => setProjectDialog(service)}>
                                            <CardMedia className='customCard_image' key={service.title} image={url + service.image.url} title={service.title} />
                                            <CardContent>
                                                <Typography variant='h5' className='customCard_title'>{service.title}</Typography>
                                                <Typography variant='body1' className='customCard_caption'>{service.description}</Typography>
                                            </CardContent>
                                        </Card>
                                    </CardActionArea>
                                </Grow>
                            </Grid>
                        </>
                    ))}
                </Grid>
            </Container>
            <Dialog fullWidth open={projectDialog} onClose={() => setProjectDialog(false)} className='projectDialog'>
                <DialogTitle onClose={() => setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
                <img src={url + (projectDialog.image ? projectDialog.image.url : 0)} alt='' className='projectDialog_image' />
                <DialogContent>
                    <Typography className='projectDialog_description'>
                        {projectDialog.description}
                    </Typography>
                    <Typography className='projectDialog_stack'>

                    </Typography>

                </DialogContent>
                <DialogActions className='projectDialog_actions'>
                    {console.log(Services.link)}

                    {Services?.links?.map(link => (
                        <>
                            <Link to={link.link} key={link.title} target='_blank' rel="noreferrer"><Button variant="contained" color="primary" href={link.link}>
                                Read More
                          </Button></Link>
                        </>
                    ))}
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default withStyles(styles)(MainServices);

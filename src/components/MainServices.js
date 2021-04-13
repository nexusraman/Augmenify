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
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    withStyles
} from '@material-ui/core/'

const styles = {
    root: {
        flexGrow: 1,
        marginBottom: '20px'
    },
    appbar: {
        alignItems: 'center',
        fontSize: '45px'
    }
};

function MainServices(props) {
    const { classes } = props;

    const [projectDialog, setProjectDialog] = useState(false);

    return (
        <div className='cards'>

            <Grid container className='section pb_45 pt_45'>
                <div className={classes.root}>
                    <Typography variant='h2' align='center' margin='20px'>
                        Our Services
                    </Typography>
                </div>

                <Grid item xs={12}>
                    <Grid container spacing={5}>
                        {Services.map((service) => (
                            <>
                                <Grid item xs={12} sm={4}>
                                    <Grow in timeout={2000}>
                                        <Card className='customCard' onClick={() => setProjectDialog(service)}>
                                            <CardActionArea>
                                                <CardMedia className='customCard_image' key={service.title} image={service.image} title={service.title} />
                                                <CardContent>
                                                    <Typography variant='h5' className='customCard_title'>{service.title}</Typography>
                                                    <Typography variant='body1' className='customCard_caption'>{service.description}</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grow>
                                </Grid>
                            </>
                        ))}
                    </Grid>
                </Grid>
                <Dialog fullWidth open={projectDialog} onClose={() => setProjectDialog(false)} className='projectDialog'>
                    <DialogTitle onClose={() => setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
                    <img src={projectDialog.image} alt='' className='projectDialog_image' />
                    <DialogContent>
                        <Typography className='projectDialog_description'>
                            {projectDialog.description}
                        </Typography>
                        <Typography className='projectDialog_stack'>

                        </Typography>

                    </DialogContent>
                    <DialogActions className='projectDialog_actions'>
                        {projectDialog?.links?.map(link => (
                            <a href={link.link} key={link.title} target='_blank' rel="noreferrer"><Button variant="contained" color="primary" href={link.link}>
                                Read More
                          </Button></a>
                        ))}
                    </DialogActions>
                </Dialog>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(MainServices);
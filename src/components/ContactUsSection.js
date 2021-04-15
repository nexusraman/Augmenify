import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '../components/Button';
import EmailIcon from '@material-ui/icons/Email';
import '../components/ContactUsSection.css';

const styles = {
    contactMeContainer: {
        paddingTop: "80px",
        paddingBottom: "80px"
    },
    text: {
        color: "white",
        paddingBottom: "50px"
    }
};

export default function ContactMe() {
    return (
        <div className="ContactUsContainer" style={styles.contactMeContainer} color="primary">
            <Grid container
                direction="column"
                align="center">
                <Grid item>
                    <Typography style={styles.text}>
                        <h1>Let's work together</h1>
                    </Typography>
                </Grid>
                <Grid item>
                    <Button className='btns' buttonStyle='btn--outline'
                        buttonSize='btn--large'>
                        Contact us
                        </Button>
                </Grid>
            </Grid>
        </div >
    )
}
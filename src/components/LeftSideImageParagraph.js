import React from 'react';
import '../App.css';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import parse from 'html-react-parser';

const styles = {
    productsContainer: {
        paddingTop: "10px",
        paddingBottom: "10px"
    },
    description: {
        display: "flex",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        maxWidth: "600px",
        height: "auto",
    }
};

function LeftSideImageParagraph(props) {
    const trigger = useScrollTrigger();

    return (
        <Container>
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item xs={12} sm={12} md={6} style={{paddingRight: "20px"}}>
                    <img style={styles.image} src={props.image} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} style={{paddingLeft: "20px"}}>
                    <Typography align="left">
                        <h2 style={{fontSize: "40px", paddingBottom: "20px", fontWeight: "lighter"}}>{props.title}</h2>
                        <p style={{fontSize: "24px", }}>{parse(props.description)}</p>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default LeftSideImageParagraph
import React from 'react';
import '../App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import parse from 'html-react-parser';
import '../css/SideImageParagraph.css'

const styles = {
    productsContainer: {
        paddingTop: "20px",
        paddingBottom: "20px"
    },
    description: {
        display: "flex",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        maxWidth: "600px",
        maxHeight: "400px",
        objectFit: "cover",
        borderRadius: "10px",
        boxShadow: "1px 2px 3px rgba(0,0,0,.5)"
    }
};

function LeftSideImageParagraph(props) {
    return (
        <Container style={styles.productsContainer}> 
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item xs={12} sm={12} md={6} style={{paddingRight: "20px"}}>
                    <img style={styles.image} alt='leftSide' src={props.image} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} style={{paddingLeft: "20px"}}>
                    <Typography align="left" className="text">
                        <h2 style={{fontSize: "40px", paddingBottom: "20px"}}>{props.title}</h2>
                        <p style={{fontSize: "24px", }}>{parse(props.description)}</p>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default LeftSideImageParagraph
import React from 'react';
import '../App.css';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
//import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box'
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
   // const trigger = useScrollTrigger();

    return (
        <Container>
            <Grid container direction="row" alignItems="center">
                <Box clone order={{ xs: 2, sm: 2, md: 1 }} style={{paddingRight: "20px"}}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography align="left" >
                            <h2 style={{fontSize: "40px", paddingBottom: "20px"}}>{props.title}</h2>
                            <p style={{fontSize: "24px", }}>{parse(props.description)}</p>
                        </Typography>
                    </Grid>
                </Box>
                <Box clone order={{ xs: 1, sm: 1, md: 2 }}>
                    <Grid item xs={12} sm={12} md={6}>
                        <img alt='something' style={styles.image} src={props.image}></img>
                    </Grid>
                </Box>
            </Grid>
        </Container>
    )
}

export default LeftSideImageParagraph
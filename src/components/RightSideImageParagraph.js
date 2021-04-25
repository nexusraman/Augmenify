import React from 'react';
import '../App.css';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
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
            <Grid container direction="row" alignItems="center">
                <Box clone order={{ xs: 2, sm: 2, md: 1 }} style={{paddingRight: "20px"}}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography align="left" variant="paragraph" className="text" >
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
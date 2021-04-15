import React from 'react';
import '../App.css';
import './ProductsMainSection.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LeftSideImageParagraph from './LeftSideImageParagraph';
import RightSideImageParagraph from './RightSideImageParagraph';

const styles = {
    productsContainer: {
        paddingTop: "45px",
        paddingBottom: "55px"
    },
    title: {
        paddingBottom: "25px"
    },
};

function ProductsMainSection(props) {
    return (
        <div style={styles.productsContainer}>
            <Grid justifyContent="center" align="center" direction="column" spacing={2}>
                {props.items.map((e, index) =>
                    index % 2 ?
                        <Grid item>
                            <LeftSideImageParagraph image={"http://localhost:1337" + e.image.url} title={e.title} description={e.description} />
                        </Grid>
                        :
                        <Grid item>
                            <RightSideImageParagraph image={"http://localhost:1337" + e.image.url} title={e.title} description={e.description} />
                        </Grid>
                )}
            </Grid>
        </div >
    )
}

export default ProductsMainSection
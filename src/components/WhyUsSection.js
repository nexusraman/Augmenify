import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { CardActionArea } from "@material-ui/core";

const styles = {
    contactMeContainer: {
        paddingTop: "60px",
        paddingBottom: "90px",
        backgroundColor: "#f1f1f1"
    },
    text: {
        paddingBottom: "50px"
    }
};

export default function WhyUs(props) {
    return (
        <CardActionArea>
            <div style={styles.contactMeContainer}>
                <Container>
                    <Typography align="center" style={styles.text}>
                        <h1>Why ROM?</h1>
                    </Typography>
                    <Grid container spacing={4} justify="center" alignItems="stretch" >

                        <Grid container align="center"
                            justify="space-between">
                            <Grid xs={12} sm={6} md={4} item>
                                <Typography>
                                    <h2 style={{ paddingBottom: "30px", fontSize: "30px" }}>Centralized Data</h2>
                                    <p style={{ fontSize: "20px", fontWeight: "normal" }}>Access key data analytics from anywhere on a real time basis</p>
                                </Typography>
                            </Grid>
                            <Grid xs={12} sm={6} md={4} item>
                                <Typography>
                                    <h2 style={{ paddingBottom: "30px", fontSize: "30px" }}>Optimized Operations</h2>
                                    <p style={{ fontSize: "20px" }}>Increase performance level by leveraging operation management features</p>
                                </Typography>
                            </Grid>
                            <Grid xs={12} sm={6} md={4} item>
                                <Typography>
                                    <h2 style={{ paddingBottom: "30px", fontSize: "30px" }}>Unified Processes</h2>
                                    <p style={{ fontSize: "20px" }}>Ensure disparate entities of your organization are working in unison</p>
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>

                </Container>

            </div>
        </CardActionArea>
    )
}
import React from 'react';
import '../App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './OurTeam.css';

const styles = {

};

function OurTeam(props) {
    return (
        <div>
            <Grid container 
                justifyContent="center" 
                align="center" 
                justify="center" 
                direction="row"
                style={{paddingBottom: "50px"}}>
                {props.items.map(e =>
                    <>
                        <Grid item xs={12} sm={10} md={5} lg={5} style={{paddingInline: "20px", paddingTop: "150px"}}>
                            <img className="imgTeamMember" style={{ position: "absolute", borderRadius: "50%", transform: "translate(-50%, -50%)", boxShadow: "0px 2px 6px"}} src={"http://localhost:1337" + e.image.url} />
                            <Container style={{minHeight: "300px", borderRadius: "20px", boxShadow: "0px 0px 3px"}}>
                                <Typography>
                                    <h1 style={{ paddingTop: "120px" }}>{e.name}</h1>
                                    <p style={{fontSize: "14px", opacity: "0.6"}}>{e.position}</p>
                                    <p style={{maxWidth: "500px", paddingTop: "20px", fontWeight: "bolder"}}>{e.description}</p>
                                </Typography>
                            </Container>
                        </Grid>
                    </>
                )}
            </Grid>
        </div >
    )
}

export default OurTeam
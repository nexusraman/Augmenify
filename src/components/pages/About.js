import React from 'react';
import axios from 'axios';
import OurTeam from '../OurTeam';
import PageHeader from '../PageHeader';
import Footer from '../Footer';
import ContactUsSection from '../ContactUsSection';
import { Grid, Typography, Container, Box } from '@material-ui/core'

class AboutApp extends React.Component {
    state = {
        elements: [],
        execTeam: [],
        backgroundImage: [],
        sideImage: [],
        title: null,
        error: null,
        path: 'http://localhost:1337/about-page'
    };

    componentDidMount = async () => {
        try {
            const response = await axios.get(this.state.path);
            this.setState({
                elements: response.data,
                execTeam: response.data.executive_team_contents,
                backgroundImage: response.data.background,
                sideImage: response.data.sideImage,
                title: response.data.title
            });
        } catch (error) {
            this.setState({ error });
        }
    };

    render() {
        const { error, elements, path, execTeam, backgroundImage, sideImage, title } = this.state;

        if (error) {
            return <div>An error occured: {error.message}</div>;
        }

        return (
            <div className="App">
                <PageHeader title={title} image={"http://localhost:1337" + backgroundImage.url} />
                <Container>
                    <Grid container direction="row" justify="space-between" alignItems="center" justifyContent="center">
                        <Box clone order={{ xs: 1, sm: 1, md: 1 }}>
                            <Grid item xs={12} style={{paddingBottom: "20px", paddingTop: "50px" }}>
                                <Typography>
                                    <h1 style={{ textAlign: "center", fontSize: "40px"}}>{elements.missionTitle}</h1>
                                </Typography>
                            </Grid>
                        </Box>
                        <Box clone order={{ xs: 2, sm: 2, md: 3 }}>
                            <Grid item xs={12} sm={12} md={6} style={{paddingBottom: "20px"}}>
                                <Typography>
                                    <h2>{elements.missionDescription}</h2>
                                </Typography>
                            </Grid>
                        </Box>
                        <Box clone order={{ xs: 3, sm: 3, md: 2 }}>
                            <Grid item xs={12} sm={12} md={6} align="center">
                                <img style={{objectFit: "cover", height: "400px"}} src={"http://localhost:1337" + sideImage.url} />
                            </Grid>
                        </Box>
                    </Grid>
                </Container>
                <h1 style={{ textAlign: "center", paddingTop: "50px", fontSize: "40px" }}>Our Executive Team</h1>
                <OurTeam items={execTeam} />
                <ContactUsSection />
                <Footer />
            </div>
        );
    }
}

export default AboutApp;
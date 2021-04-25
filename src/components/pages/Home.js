import '../../App.css';
import MainSection from '../MainSection';
import React from 'react'
import MainServices from '../MainServices';
import axios from 'axios';
import Announcement from '../Announcement'
import ContactUsSection from '../ContactUsSection';

class Home extends React.Component {
    state = {
        elements: [],
        error: null,
        path: 'http://localhost:1337/home-page',
        announcePath: 'http://localhost:1337/notification',
        serviceCards: [],
        announcement: []
    };

    componentDidMount = async () => {
        try {
            const response = await axios.get(this.state.path);
            const announcementResponse = await axios.get(this.state.announcePath);
            this.setState({
                elements: response.data,
                serviceCards: response.data.service_cards,
                announcement: announcementResponse.data,
            });
        } catch (error) {
            this.setState({ error });
        }
    };

    render() {
        const { error, serviceCards, announcement } = this.state;

        if (error) {
            return <div>An error occured: {error.message}</div>;
        }

        return (
            <>
                <Announcement announcement={announcement} />
                <MainSection />
                <MainServices services={serviceCards} />
                <ContactUsSection />
            </>
        );
    }
}

export default Home
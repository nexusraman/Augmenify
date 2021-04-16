import '../../App.css';
import MainSection from '../MainSection';
import React from 'react'
import MainServices from '../MainServices';
import axios from 'axios';

class Home extends React.Component {
    state = {
        elements: [],
        error: null,
        path: 'http://localhost:1337/home-page',
        serviceCards: []
    };

    componentDidMount = async () => {
        try {
            const response = await axios.get(this.state.path);
            this.setState({
                elements: response.data,
                serviceCards: response.data.service_cards,
            });
        } catch (error) {
            this.setState({ error });
        }
    };

    render() {
        const { error,serviceCards } = this.state;

        if (error) {
            return <div>An error occured: {error.message}</div>;
        }

        return (
            <>
                <MainSection />
                <MainServices services={serviceCards} />
            </>
        );
    }
}

export default Home
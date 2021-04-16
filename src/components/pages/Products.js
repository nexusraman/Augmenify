import '../../App.css';
import ProductsMainSection from '../ProductsMainSection';
import ContactUsSection from '../ContactUsSection';
import WhyUsSection from '../WhyUsSection';
import PageHeader from '../PageHeader';
import React from 'react';
import axios from 'axios';

class Products extends React.Component {
    state = {
        elements: [],
        error: null,
        path: 'http://localhost:1337/products-page',
        backgroundImage: [],
        title: null,
        whyPills: [],
        products: []
    };

    componentDidMount = async () => {
        try {
            const response = await axios.get(this.state.path);
            this.setState({ elements: response.data,
                backgroundImage: response.data.background,
                title: response.data.title,
                products: response.data.products});
        } catch (error) {
            this.setState({ error });
        }
    };

    render() {
        const { error, backgroundImage, title, products } = this.state;

        if (error) {
            return <div>An error occured: {error.message}</div>;
        }

        return (
            <>
                <PageHeader title={title} image={"http://localhost:1337" + backgroundImage.url} />
                <ProductsMainSection items={products}/>
                <WhyUsSection />
                <ContactUsSection />
            </>
        );
    }
}

export default Products;
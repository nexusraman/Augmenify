import React, { Component } from "react";
import { ReactNavbar } from "react-responsive-animate-navbar";

export default class Example extends Component {
    render() {
        return (
            <ReactNavbar
                color="rgb(25, 25, 25)"
                logo={process.env.PUBLIC_URL + '/images/logo.png'}
                menu={[
                    { name: "HOME", to: "/" },
                    { name: "PRODUCTS", to: "/products" },
                    { name: "ABOUT", to: "/about" },
                    { name: "SERVICES", to: "/services" },
                    { name: "CONTACT", to: "/contact" },
                ]}
                social={[
                    {
                        name: "Linkedin",
                        url: "https://www.linkedin.com/company/augmenify/",
                        icon: ["fab", "linkedin-in"],
                    },
                    {
                        name: "Facebook",
                        url: "https://www.facebook.com/pages/Augmenify-Infotech-Pvt-Ltd/",
                        icon: ["fab", "facebook-f"],
                    },
                    {
                        name: "Instagram",
                        url: "https://www.instagram.com/nazeh_taha/",
                        icon: ["fab", "instagram"],
                    },
                    {
                        name: "Twitter",
                        url: "http://nazehtaha.herokuapp.com/",
                        icon: ["fab", "twitter"],
                    },
                ]}
            />
        );
    }
}
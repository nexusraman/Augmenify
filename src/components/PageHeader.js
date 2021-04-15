import * as React from "react";
import { Grid } from "@material-ui/core";
import './PageHeader.css';

function PageHeader(props) {
    const styles = {
        headerContainer: {
            position: "relative",
        },
        title: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white"
        },
        image: {
            display: "block",
            position: "relative",
            width: "100%",
            filter: "brightness(50%)",
            objectFit: "cover",
        }
    };

    return (
        <>
            <div className="header-height-adjuster" style={styles.headerContainer}>
                <img className="header-height-adjuster" style={styles.image} src={props.image} />
                <h1 style={styles.title}>{props.title}</h1>
            </div>
        </>
    );
};

export default PageHeader;
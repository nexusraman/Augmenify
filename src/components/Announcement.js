import React, { useState } from "react";
import './Announcement.css';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';

class Announcement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.announcement.text,
            link: props.announcement.link,
            isDisplay: true
        };
    }

    changeState = () => {
        this.setState({ isDisplay: false });
    }

    render() {
        const { text, link, isDisplay } = this.state;
        
        return (
            <>
                {(this.props.announcement.text && this.props.announcement.link && isDisplay && this.props.announcement.display == true) ? (
                    <Grid container className="announcement" justify="space-evenly" alignItems="center">
                        <Grid item xs={10} lg={11}>
                        <p>{this.props.announcement.text} | <a href={this.props.announcement.link}>Read More</a></p>
                        </Grid>
                        <Grid item xs={2} lg={1}>
                        <Button className="closeButton" onClick={this.changeState}><CloseIcon /></Button>
                        </Grid>
                    </Grid>
                ) : 
                    (<></>)
                }   
            </>
        )
    }
}

export default Announcement;
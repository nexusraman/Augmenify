import React, { useEffect, useState } from 'react';
import '../App.css';
import './MainSection.css';
import Button from './Button';
import { Collapse, Fade } from '@material-ui/core';

const MainSection = () => {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, [])

    return (
        <div className='main-container'>
            <video src='/videos/video.mp4' autoPlay loop muted />
             {/* <img src={process.env.PUBLIC_URL + '/images/mobile.jpg'}></img> */}
            <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}>
                <h2>Augmenify</h2>
                <p>Welcome</p>
            </Collapse>
            <Fade in={checked}
                {...(checked ? { timeout: 6000 } : {})}
            >
                <div className='main-btns'>
                    <Button className='btns' buttonStyle='btn--outline'
                        buttonSize='btn--large'>Get Started</Button>
                    <Button className='btns' buttonStyle='btn--primary'
                        buttonSize='btn--large'>
                        View Products
                </Button>

                </div>
            </Fade>
        </div >
    )
}

export default MainSection

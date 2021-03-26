import React from 'react';
import '../App.css';
import './MainSection.css';
import Button from './Button';

const MainSection = () => {
    return (
        <div className='main-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>Augmenify</h1>
            <p>Welcome</p>
            <div className='main-btns'>
                <Button className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--large'>Get Started</Button>
                <Button className='btns' buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    View Products
                </Button>
            </div>
        </div>
    )
}

export default MainSection

import React from 'react';
import '../App.css';
import './MainSection.css';
import Button from './Button';

const MainSection = () => {
    return (
        <div className='main-container'>
            <video src='/videos/video.mp4' autoPlay loop muted />
            <h2>Augmenify</h2>
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

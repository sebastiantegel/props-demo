import React from 'react';
import './about.css';

export interface IAnimal {
    name: string;
    color: string;
    age: number;
}

interface IAboutProps {
}

interface IAboutState {
}

class About extends React.Component<IAboutProps, IAboutState> {
    render() {
        return (
            <div className='about-container'>
                Lorem ipsum dolor sit amet
            </div>
        );
    }
}

export default About;
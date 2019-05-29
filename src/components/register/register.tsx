import React from 'react';
import './register.css';

export interface IAnimal {
    name: string;
    color: string;
    age: number;
}

interface IRegisterProps {
    heading: string;
    divtext: string;
    animal: IAnimal;

    zoo: IAnimal[];

    dummyClick(): any;
}

class Register extends React.Component<IRegisterProps, {}> {
    constructor(props: IRegisterProps) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('Test from Register');
        this.props.dummyClick();
    }

    render() {
        let animalList = [];

        for (let i = 0; i < this.props.zoo.length; i++) {
            animalList.push((<li key={i}>{this.props.zoo[i].name} - {this.props.zoo[i].age}</li>));
        }

        return (
            <div>
                <p className='header'>{this.props.heading}</p>
                <div>{this.props.animal.name}</div>

                <ul>
                    {animalList}
                </ul>

                <p>
                    <button onClick={this.handleClick}>Klicka på mig</button>
                </p>
            </div>
        );
    }
}

export default Register;
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

    dummyClick(text: string): any;
}

interface IRegisterState {
    text: string;

    isShown: boolean;
}

class Register extends React.Component<IRegisterProps, IRegisterState> {
    constructor(props: IRegisterProps) {
        super(props);

        this.state = { text: '', isShown: false };

        this.handleClick = this.handleClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    handleClick() {
        console.log('Test from Register');
        this.props.dummyClick(this.state.text);
    }

    handleOnChange(event: any) {
        this.setState({
            text: event.target.value
        });
    }

    toggle() {
        this.setState((state) => ({
          isShown: !state.isShown
        }));
      }

    render() {
        let animalList = [];

        for (let i = 0; i < this.props.zoo.length; i++) {
            animalList.push((<li key={i}>{this.props.zoo[i].name} - {this.props.zoo[i].age}</li>));
        }

        if(!this.state.isShown) {
            return (<div className="App">
                <button onClick={this.toggle}>Toggle</button>
            </div>);
        }

        return (
            <div>
                <p className='header'>{this.props.heading}</p>
                <div>{this.props.animal.name}</div>

                <ul>
                    {animalList}
                </ul>

                <input value={this.state.text} onChange={this.handleOnChange} />

                <p>
                    <button onClick={this.handleClick}>Klicka på mig</button>
                </p>

                <p>
                    <button onClick={this.toggle}>Toggle</button>
                </p>
            </div>
        );
    }
}

export default Register;
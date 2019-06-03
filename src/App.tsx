import React from 'react';
import './App.css';
import Register, { IAnimal } from './components/register/register';

interface IAppState {
  isShown: boolean;
}

class App extends React.Component<{}, IAppState> {
  constructor() {
    super({});

    this.state = { isShown: false };

    this.toggle = this.toggle.bind(this);
  }

  handleParentClick(textToWrite: string): any {
    console.log('Test from App: ', textToWrite);
  }

  toggle() {
    this.setState((state) => ({
      isShown: !state.isShown
    }));
  }

  render() {
    console.log(this.state);
    
    let animal: IAnimal = { name: 'Majsan', color: 'White', age: 13};
    let animals: IAnimal[] = [{ name: 'Majsan', color: 'White', age: 13},
                              { name: 'Bobby', color: 'Orange', age: 55},
                              { name: 'Nemo', color: 'Stripy', age: 1}]

    let html = (
      <div className="App">
        <Register
          heading="Lorem ipsum"
          divtext="Hej hej"
          animal={animal}
          zoo={animals}
          dummyClick={this.handleParentClick}
        />
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );

    if(!this.state.isShown) {
      html = (<div className="App">
        <button onClick={this.toggle}>Toggle</button>
      </div>);
    }

    return (
      <div>
        {html}
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Register, { IAnimal } from './components/register/register';

class App extends React.Component<{}, {}> {
  handleParentClick(): any {
    console.log('Test from App');
  }

  render() {
    let animal: IAnimal = { name: 'Majsan', color: 'White', age: 13};
    let animals: IAnimal[] = [{ name: 'Majsan', color: 'White', age: 13},
                              { name: 'Bobby', color: 'Orange', age: 55},
                              { name: 'Nemo', color: 'Stripy', age: 1}]

    return (
      <div className="App">
        <Register heading='Lorem ipsum' 
                  divtext='Hej hej' 
                  animal={animal}
                  zoo={animals}
                  dummyClick={this.handleParentClick} />
      </div>
    );
  }
}

export default App;

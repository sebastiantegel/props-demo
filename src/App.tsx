import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Register, { IAnimal } from './components/register/register';
import Footer from './components/footer/footer';
import About from './components/about/about';

interface IAppState {
  isShown: boolean;
}

class App extends React.Component<{}, IAppState> {
  constructor() {
    super({});

    this.state = { isShown: false };
  }

  handleParentClick(textToWrite: string): any {
    console.log('Test from App: ', textToWrite);
  }

  render() {
    let animal: IAnimal = { name: 'Majsan', color: 'White', age: 13};
    let animals: IAnimal[] = [{ name: 'Majsan', color: 'White', age: 13},
                              { name: 'Bobby', color: 'Orange', age: 55},
                              { name: 'Nemo', color: 'Stripy', age: 1}]

    const props = {
      'heading': "Lorem ipsum",
      'divtext': "Hej hej",
      'animal': animal,
      'zoo': animals,
      'dummyClick': this.handleParentClick
    };

    return (
      <Switch>
        <Route path='/about' component={About}/>
        <Route path='/register' render={() => <Register {...props} /> }/> // renders null
        <Route component={Footer}/>
      </Switch>
    );
  }
}

export default App;

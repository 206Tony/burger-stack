import React from 'react';
import Ingredient from './Ingredient';
import BurgerPane from './BurgerPane';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Lettuce Wrap', color: 'olivedrab'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}
      ],
      stack: []
    }
  }

  clearStack = (e) => {
    e.preventDefault();
    this.setState({
      stack: []
    })
  }

  handleIngredient = (e) => {
    e.preventDefault();
    this.setState({
      newIngredient: e.target.value
    })
  }

  onAddIngredient = (e, i) => {
    e.preventDefault();
      const stackCopy = Array.from(this.state.stack);
      stackCopy.unshift(this.state.ingredients[i]);
      this.setState({
        stack: stackCopy
      })
    }

  render() {
  var listCopy = Array.from(this.state.ingredients);
  var stackCopy = Array.from(this.state.stack); 

  return (
      <main>
        <div id='ingredients'>
          <Ingredient ingredients={listCopy} addIngredient={this.onAddIngredient} />
        </div>
        <div>
          <BurgerPane usedIngredients={stackCopy} clearStack={this.clearStack} />
        </div>
      </main>
    );
  }
}

export default App;

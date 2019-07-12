import React from 'react';
import IngredientItem from './IngredientItem';

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

  updateTask = (e) => {
    e.preventDefault();
    this.setState({
      stack: e.target.value
    })
  }

  addTask = (e) => {
    e.preventDefault();
    var ingredients = Array.from(this.state.ingredients);
    ingredients.push(this.state.stack);
    this.setState({
      ingredients, 
      stack: ''
    })
  }

  render() {
  var ingredients = Array.from(this.state.ingredients);
  var mappedIngredients = ingredients.map(ingredient => <IngredientItem ingredient={ingredient} />) 

  return (
    <main style={{display: 'inlineBlock'}}>
      {mappedIngredients}
      <hr />
      <input onChange={this.stack} type='text' name='ingredientsText' /><br />
      <h1>Burger Stack</h1>
      <button onClick={this.addTask}>Clear</button>
    </main>
  );

  }
}

export default App;

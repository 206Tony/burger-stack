import React from 'react';

const BurgerPane = (props) => (
  <>
    <hr/>
      <h1>Burger Time!</h1>
      {props.usedIngredients.map((usedIngredient, i) => <p key={i} style={{backgroundColor: usedIngredient.color}}>{usedIngredient.name}</p>)}
      <button onClick={props.clearStack}>Clear</button>
  </>
);

export default BurgerPane;
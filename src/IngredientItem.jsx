import React from 'react'

class IngredientItem extends React.Component {
  render() {
    return (
      <section style={{textAlign: 'center'}}>
        <h3 style={{display: 'inline', backgroundColor: 'lightgrey'}}>{this.props.ingredent}</h3>
        <span style={{color: 'red'}}></span>

      </section>
    );
  }
}

export default IngredientItem;
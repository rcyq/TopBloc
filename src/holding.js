import React from 'react';
import AddButton from './addButton';

var Dancer = React.createClass({
  render: function() {
    let addToFormation = <span />;
    let {inFormation, addDancerToFormation, removeDancer} = this.props;

    if (!inFormation) {
      addToFormation = (
        <button onClick={addDancerToFormation}>
          Add
        </button>
      );
    }
    return (
      <li>
        {this.props.dancer}
        {addToFormation}
        <button onClick={removeDancer}>Remove</button>
      </li>
    );
  }
});

var Holding = React.createClass({

  addDancerToFormation: function(dancer) {
    this.props.addDancerToFormation(dancer);
  },

  removeDancer: function(dancer) {
    this.props.removeDancer(dancer);
  },

  render: function() {
    let {formation, dancers} = this.props;
    let dancersInFormation = formation.map((d) => d.dancer);
    let inFormation = (d) => dancersInFormation.indexOf(d) >= 0;

    return (
      <div>
        <h2>Dancers</h2>
        <AddButton addDancer={this.props.addDancer}/>
        <ul>
        {dancers.map(function(d, i) {
          return (
            <Dancer
              key={i}
              dancer={d}
              inFormation={inFormation(i)}
              addDancerToFormation={this.addDancerToFormation.bind(this, i)}
              removeDancer={this.removeDancer.bind(this, i)}
              />
          );
        }.bind(this))}
        </ul>
      </div>
    );
  }

});

export default Holding;

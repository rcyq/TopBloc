import React from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';

import Stage from './stage';
import Previews from './previews';
import Selected from './selected';
import SaveFormation from './saveFormation';
import Holding from './holding';
import initialState from './constants';

var App = React.createClass({
  propTypes: {
    formations: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        dancer: React.PropTypes.number,
        position: React.PropTypes.shape({
          top: React.PropTypes.number,
          left: React.PropTypes.number
        })
      })
    )
  },

  getDefaultProps: function() {
    return initialState.formations;
  },

  getInitialState: () => initialState,

  // adds a dancer to the currently editing formation
  addDancer: function() {
    let {dancers} = this.state;
    dancers = update(dancers, {$push: [this._newDancer()]});
    this.setState({dancers});
  },

  removeDancer: function(dancer) {
    let {dancers} = this.state;
    dancers = update(dancers, {$splice: [[dancer, 1]]});
    this.setState({dancers});
  },

  // helper function to make a new dancer
  _newDancer: function() {
    return `Dancer ${this.state.dancers.length + 1}`;
  },

  // updates a dancer name to newName
  setDancerName: function(newName) {
    let {dancers, selectedDancer} = this.state;
    dancers = update(dancers, {[selectedDancer]: {$set: newName}});
    this.setState({dancers});
  },

  // sets the index of the currently selected dancer
  setSelectedDancer: function(i) {
    this.setState({selectedDancer: i});
  },

  // updates the position of the currently selected dancer
  // in the currently editing formation
  updateDancerPosition: function(i, position) {
    const {formations, editing} = this.state;
    const selectedDancer = i;
    const newFormations = update(
      formations, {
        [editing]: {
          [selectedDancer]: {
            position: {$set: position}
          }
        }
      }
    );
    this.setState({formations: newFormations});
  },

  setEditingFormation: function(index) {
    this.setState({editing: index});
  },

  addDancerToFormation: function(dancer) {
    let {formations, editing} = this.state;
    formations = update(
      formations, {
        [editing]:
          {$push: [{dancer, position: {top: 0, left: 0}}]}
      });
    this.setState({formations});
  },

  render: function() {
    var {formations, editing, selectedDancer, dancers} = this.state;
    var formation = formations[editing];
    var dancer = dancers[selectedDancer];

    return (
      <div>
        <Stage
          formation={formation}
          dancers={dancers}
          setSelectedDancer={this.setSelectedDancer}
          selectedDancer={this.state.selectedDancer}
          updateDancerPosition={this.updateDancerPosition}
          />
        <Selected
          dancer={dancer}
          setDancerName={this.setDancerName}
          />
        <SaveFormation />
        <Previews
          formations={formations}
          editing={editing}
          setEditingFormation={this.setEditingFormation}
          />
        <Holding
          dancers={dancers}
          formation={formation}
          addDancerToFormation={this.addDancerToFormation}
          addDancer={this.addDancer}
          removeDancer={this.removeDancer}
          />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('container'));

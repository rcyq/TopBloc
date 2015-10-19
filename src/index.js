import React from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';

import Stage from './stage';
import Previews from './previews';
import AddButton from './addButton';
import Selected from './selected';
import SaveFormation from './saveFormation';
import { initialState } from './constants';

var App = React.createClass({

  getInitialState: () => initialState,

  // adds a dancer to the currently editing formation
  addDancer: function() {
    var {formations, editing} = this.state;
    var newFormations = update(
      formations, {[editing]: {$push: [this._newDancer()]}}
    );
    this.setState({formations: newFormations});
  },

  // helper function to make a new dancer
  _newDancer: function() {
    var {formations, editing} = this.state;
    var dancers = formations[editing];
    return {
      position: {
        top: 0,
        left: 0
      },
      name: `Dancer ${dancers.length + 1}`
    };
  },

  // updates a dancer name to newName
  setDancerName: function(newName) {
    var {formations, editing, selectedDancer} = this.state;
    var newFormations = update(
      formations, {
        [editing]: {
          [selectedDancer]: {
            name: {$set: newName}
          }
        }
      }
    );
    this.setState({formations: newFormations});
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

  render: function() {
    var {formations, editing, selectedDancer} = this.state;
    var dancers = formations[editing];
    var dancer = dancers[selectedDancer];

    return (
      <div>
        <Stage
          dancers={dancers}
          addDancer={this.addDancer}
          setDancerName={this.setDancerName}
          setSelectedDancer={this.setSelectedDancer}
          selectedDancer={this.state.selectedDancer}
          updateDancerPosition={this.updateDancerPosition}
          />
        <AddButton addDancer={this.addDancer}/>
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
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('container'));

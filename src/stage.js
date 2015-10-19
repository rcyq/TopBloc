import React from 'react';
import Dancer from './dancer';

/* The main stage that is shown for user editing */
var Stage = React.createClass({

  updateDancerPosition: function(i, pos) {
    this.props.updateDancerPosition(i, pos);
  },

  setSelectedDancer: function(i) {
    this.props.setSelectedDancer(i);
  },

  render: function() {
    var divStyle = {
      background: '#efefef',
      height: '500px',
      width: '960px'
    };

    return (
      <div style={divStyle}>
        {this.props.dancers.map(function(d, i) {
          return (
            <Dancer
              radius={100}
              key={i}
              position={d.position}
              updateDancerPosition={this.updateDancerPosition.bind(this, i)}
              setSelectedDancer={this.setSelectedDancer.bind(this, i)}
              name={d.name}
              />
          );
        }.bind(this))}
      </div>
    );
  }
});

export default Stage;

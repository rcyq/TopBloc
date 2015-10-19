import React from 'react';
import Draggable from 'react-draggable';

/*
 * Dancer component for the main editing stage
 */
var Dancer = React.createClass({

  handleStop: function(e, ui) {
    this.props.updateDancerPosition(ui.position);
    this.props.setSelectedDancer();
  },

  // note that the position of the dancer is passed as props by the parent
  // so we need to update the position in the parent state
  // using the callback `updateDancerPosition` when the drag stops
  render: function() {
    var dancerStyle = {
      height: this.props.radius + 'px',
      width: this.props.radius + 'px',
      background: 'blue',
      boxSizing: 'border-box'
    };

    return (
      <Draggable
        ref="dancer"
        bounds="parent"
        start={{
          x: this.props.position.left,
          y: this.props.position.top
        }}
        onStop={this.handleStop}
        moveOnStartChange={true}
        >
        <div
          style={dancerStyle}>
        </div>
      </Draggable>
    );
  }

});

/*
 * Dancer component for the the previews
 */
export var DancerPreview = React.createClass({

  render: function() {
    var dancerStyle = {
      height: this.props.radius + 'px',
      width: this.props.radius + 'px',
      background: 'blue'
    };

    return (
      <Draggable
        start={{
          x: this.props.position.left,
          y: this.props.position.top
        }}
        moveOnStartChange={true}
        >
        <div
          style={dancerStyle}>
        </div>
      </Draggable>
    );
  }
});

export default Dancer;

import React from 'react';

var AddButton = React.createClass({
  handleClick: function() {
    this.props.addDancer();
  },

  render: function() {
    return (
      <button onClick={this.handleClick}>
        Add Dancer
      </button>
    );
  }
});

export default AddButton;

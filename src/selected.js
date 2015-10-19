import React from 'react';

var Selected = React.createClass({

  getInitialState: function() {
    if (this.props.dancer) {
      return {value: this.props.dancer.name};
    } else {
      return {value: ''};
    }
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      value: nextProps.dancer.name
    });
  },

  handleChange: function(event) {
    this.setState({
      value: event.target.value
    });
    this.props.setDancerName(event.target.value);
  },

  render: function() {
    return (
      <div className="selected">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          />
        <button>
          Delete
        </button>
      </div>
    );
  }
});

export default Selected;

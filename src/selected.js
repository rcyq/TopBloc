import React from 'react';

var Selected = React.createClass({

  getInitialState: function() {
    if (this.props.dancer) {
      return {value: this.props.dancer};
    } else {
      return {value: ''};
    }
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      value: nextProps.dancer
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
      </div>
    );
  }
});

export default Selected;

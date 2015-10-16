import React from 'react';
import ReactART from 'react-art';
import Circle from 'react-art/shapes/circle'

var Shape = ReactART.Shape;
var Group = ReactART.Group;
var Surface = ReactART.Surface;
var Transform = ReactART.Transform;

var Dancer = React.createClass({
  getDefaultProps: function() {
    return {pos: {x:100, y:20}};
  },
  getInitialState: function() {
    return {
      pos: this.props.pos,
      dragging: false
    };
  },
  handleClick: function() {
    this.setState({x: this.state.pos.x + 10, y: this.state.pos.y});
  },
  render: function() {
    return (
      <Group
        x={this.state.x}
        y={this.state.y}
        onClick={this.handleClick}>
        <Circle radius={20} fill="blue"/>

      </Group>
    );
  }
});

var Stage = React.createClass({
  getInitialState: function() {
    return {dancers: [{x:100, y:20}, {x:200, y:20}]};
  },
  handleClick: function(e) {
    console.log('hi');

    newState = this.state.dancers.map(function(d) {
      return {
        x: e.eventX,
        y: e.eventY
      }
    })
    this.setState(newState);
  },
  render: function() {
    var results = this.state.dancers;
    return (
      <div>
        <Surface
          onClick={this.handleClick}
          width={700}
          height={700}
          style={{cursor: 'pointer'}}>
          {this.state.dancers.map(function(d) {
            return <Dancer key={d.id} d={d}/>
          })}
        </Surface>
      </div>
    )
  }

});

export default Stage

import React from 'react';
import { DancerPreview } from './dancer';
import update from 'react-addons-update';

var PreviewStage = React.createClass({
  render: function() {
    var divStyle = {
      background: '#efefef',
      height: '100px',
      width: '192px',
      border: this.props.isEditing ? '4px solid #239090' : '1px solid black',
      margin: '10px'
    };
    var divisor = 5;
    var radius = 100 / divisor;

    return (
      <div
        style={divStyle}
        onClick={this.props.selectPreview}>
          {this.props.dancers.map(function(d, i) {
            return (
              <DancerPreview
                radius={radius}
                key={i}
                position={d.position}
                name={d.name}
              />
            );
          }.bind(this))}
      </div>
    );
  }

});

var Previews = React.createClass({
  selectPreview: function(i) {
    this.props.setEditingFormation(i);
  },

  render: function() {
    var formations = this.props.formations;
    const divisor = 5;

    function scalePos(dancers) {
      return dancers.map(
        d => update(d, {$merge: {position: {
          top: d.position.top/divisor,
          left: d.position.left/divisor
        }}})
      );
    }

    return (
      <div className="preview">
        {formations.map((f, i) => {
          return (
            <PreviewStage
              isEditing={i === this.props.editing}
              selectPreview={this.selectPreview.bind(this, i)}
              key={i}
              dancers={scalePos(f)} />
          );
        })}
      </div>
    );
  }
});

export default Previews;

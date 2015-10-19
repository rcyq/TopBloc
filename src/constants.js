import update from 'react-addons-update';

var dancers = [
  {
    position: {
      top: 200, left: 90
    },
    name: 'Ryan'
  },
  {
    position: {
      top: 100, left: 20
    },
    name: 'Yip'
  }
];
var newDancers = update(dancers, {$merge: {}});
var formations = [dancers, newDancers];

export var initialState = {
  formations,
  selectedDancer: 0,
  editing: 0
};

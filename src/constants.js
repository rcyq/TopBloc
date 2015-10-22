import update from 'react-addons-update';

var formation1 = [
  {
    dancer: 0,
    position: {
      top: 200,
      left: 90
    }
  }, {
    dancer: 1,
    position: {
      top: 100,
      left: 20
    }
  }];

var formation2 = update(formation1, {$merge: {}});
var formations = [formation1, formation2];

var initialState = {
  formations,
  selectedDancer: 0,
  editing: 0,
  dancers: ['ryan', 'yip']
};

export default initialState;

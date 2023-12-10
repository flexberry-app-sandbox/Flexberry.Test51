import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостоянияEnum from '../enums/i-i-s-test5-состояния';

export default FlexberryEnum.extend({
  enum: СостоянияEnum,
  sourceType: 'IIS.Test5.Состояния'
});

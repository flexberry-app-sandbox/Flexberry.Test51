import {
  defineNamespace,
  defineProjections,
  Model as СтрокаЗаказаMixin
} from '../mixins/regenerated/models/i-i-s-test5-строка-заказа';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СтрокаЗаказаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  статус: DS.attr('i-i-s-test5-состояния'),
  цена: DS.attr('string'),
  клиент: DS.belongsTo('i-i-s-test5-клиент', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-test5-сотрудник', { inverse: null, async: false }),
  строкаЗаказа: DS.hasMany('i-i-s-test5-строка-заказа', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-test5-заказ.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-test5-заказ.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-test5-заказ.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-test5-заказ.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-test5-заказ.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  строкаЗаказа: {
    descriptionKey: 'models.i-i-s-test5-заказ.validations.строкаЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-test5-заказ', {
    статус: attr('Статус', { index: 0 }),
    цена: attr('Цена', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    клиент: belongsTo('i-i-s-test5-клиент', '', {
      номер: attr('', { index: 4 })
    }, { index: 3 }),
    сотрудник: belongsTo('i-i-s-test5-сотрудник', '', {
      табНом: attr('', { index: 6 })
    }, { index: 5 })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-test5-заказ', {
    статус: attr('Статус', { index: 0 }),
    цена: attr('Цена', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    сотрудник: belongsTo('i-i-s-test5-сотрудник', '', {
      табНом: attr('', { index: 3 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-test5-клиент', '', {
      номер: attr('', { index: 4 })
    }, { index: -1, hidden: true })
  });
};

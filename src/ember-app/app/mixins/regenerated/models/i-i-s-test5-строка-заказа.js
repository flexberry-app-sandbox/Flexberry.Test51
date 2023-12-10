import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  название: DS.attr('string'),
  сумма: DS.attr('decimal'),
  цена: DS.attr('number'),
  товар: DS.belongsTo('i-i-s-test5-товар', { inverse: null, async: false }),
  заказ: DS.belongsTo('i-i-s-test5-заказ', { inverse: 'строкаЗаказа', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-test5-строка-заказа.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-test5-строка-заказа.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-test5-строка-заказа.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-test5-строка-заказа.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-test5-строка-заказа.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-test5-строка-заказа.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СтрокаЗаказаE', 'i-i-s-test5-строка-заказа', {
    количество: attr('Количество', { index: 0 }),
    сумма: attr('Сумма', { index: 1 }),
    название: attr('Название', { index: 2 }),
    цена: attr('Цена', { index: 3 }),
    товар: belongsTo('i-i-s-test5-товар', 'Товар', {
      название: attr('Название', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'название' })
  });
};

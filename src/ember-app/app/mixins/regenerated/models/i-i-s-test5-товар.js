import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодТ: DS.attr('number'),
  название: DS.attr('string'),
  цена: DS.attr('decimal')
});

export let ValidationRules = {
  кодТ: {
    descriptionKey: 'models.i-i-s-test5-товар.validations.кодТ.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-test5-товар.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-test5-товар.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварE', 'i-i-s-test5-товар', {
    цена: attr('Цена', { index: 0 }),
    кодТ: attr('Код Т', { index: 1 }),
    название: attr('Название', { index: 2 })
  });

  modelClass.defineProjection('ТоварL', 'i-i-s-test5-товар', {
    кодТ: attr('Код Т', { index: 0 }),
    название: attr('Название', { index: 1 }),
    цена: attr('', { index: 2 })
  });
};

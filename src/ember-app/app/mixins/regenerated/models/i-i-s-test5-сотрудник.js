import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  отчество: DS.attr('string'),
  табНом: DS.attr('number'),
  фамилия: DS.attr('string')
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-test5-сотрудник.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-test5-сотрудник.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  табНом: {
    descriptionKey: 'models.i-i-s-test5-сотрудник.validations.табНом.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-test5-сотрудник.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-test5-сотрудник', {
    табНом: attr('', { index: 0 }),
    фамилия: attr('', { index: 1 }),
    имя: attr('', { index: 2 }),
    отчество: attr('', { index: 3 })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-test5-сотрудник', {
    табНом: attr('', { index: 0 }),
    фамилия: attr('', { index: 1 }),
    имя: attr('', { index: 2 }),
    отчество: attr('', { index: 3 })
  });
};

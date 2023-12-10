import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  кодК: DS.attr('number'),
  номер: DS.attr('number'),
  отчество: DS.attr('string'),
  фамилия: DS.attr('string')
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-test5-клиент.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодК: {
    descriptionKey: 'models.i-i-s-test5-клиент.validations.кодК.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-test5-клиент.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-test5-клиент.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-test5-клиент.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-test5-клиент', {
    номер: attr('Номер', { index: 0 }),
    отчество: attr('Отчество', { index: 1 }),
    фамилия: attr('Фамилия', { index: 2 }),
    имя: attr('Имя', { index: 3 }),
    кодК: attr('Код К', { index: 4 })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-test5-клиент', {
    номер: attr('Номер', { index: 0 }),
    отчество: attr('Отчество', { index: 1 }),
    фамилия: attr('Фамилия', { index: 2 }),
    имя: attr('Имя', { index: 3 }),
    кодК: attr('Код К', { index: 4 })
  });
};

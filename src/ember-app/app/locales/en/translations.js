import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTest5ЗаказLForm from './forms/i-i-s-test5-заказ-l';
import IISTest5КлиентLForm from './forms/i-i-s-test5-клиент-l';
import IISTest5СотрудникLForm from './forms/i-i-s-test5-сотрудник-l';
import IISTest5ТоварLForm from './forms/i-i-s-test5-товар-l';
import IISTest5ЗаказEForm from './forms/i-i-s-test5-заказ-e';
import IISTest5КлиентEForm from './forms/i-i-s-test5-клиент-e';
import IISTest5СотрудникEForm from './forms/i-i-s-test5-сотрудник-e';
import IISTest5ТоварEForm from './forms/i-i-s-test5-товар-e';
import IISTest5ЗаказModel from './models/i-i-s-test5-заказ';
import IISTest5КлиентModel from './models/i-i-s-test5-клиент';
import IISTest5СотрудникModel from './models/i-i-s-test5-сотрудник';
import IISTest5СтрокаЗаказаModel from './models/i-i-s-test5-строка-заказа';
import IISTest5ТоварModel from './models/i-i-s-test5-товар';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test5-заказ': IISTest5ЗаказModel,
    'i-i-s-test5-клиент': IISTest5КлиентModel,
    'i-i-s-test5-сотрудник': IISTest5СотрудникModel,
    'i-i-s-test5-строка-заказа': IISTest5СтрокаЗаказаModel,
    'i-i-s-test5-товар': IISTest5ТоварModel
  },

  'application-name': 'Test5',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test5',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test5',
          title: 'Test5'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        test5: {
          caption: 'Test5',
          title: 'Test5',
          'i-i-s-test5-товар-l': {
            caption: 'Товар',
            title: ''
          },
          'i-i-s-test5-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-test5-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-test5-клиент-l': {
            caption: 'Клиент',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test5-заказ-l': IISTest5ЗаказLForm,
    'i-i-s-test5-клиент-l': IISTest5КлиентLForm,
    'i-i-s-test5-сотрудник-l': IISTest5СотрудникLForm,
    'i-i-s-test5-товар-l': IISTest5ТоварLForm,
    'i-i-s-test5-заказ-e': IISTest5ЗаказEForm,
    'i-i-s-test5-клиент-e': IISTest5КлиентEForm,
    'i-i-s-test5-сотрудник-e': IISTest5СотрудникEForm,
    'i-i-s-test5-товар-e': IISTest5ТоварEForm
  },

});

export default translations;

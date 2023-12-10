import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test5',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test5',
          title: 'Test5'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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

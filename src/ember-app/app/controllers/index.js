import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.test5.caption'),
          title: i18n.t('forms.application.sitemap.test5.title'),
          children: [{
            link: 'i-i-s-test5-товар-l',
            caption: i18n.t('forms.application.sitemap.test5.i-i-s-test5-товар-l.caption'),
            title: i18n.t('forms.application.sitemap.test5.i-i-s-test5-товар-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-test5-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.test5.i-i-s-test5-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.test5.i-i-s-test5-сотрудник-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-test5-заказ-l',
            caption: i18n.t('forms.application.sitemap.test5.i-i-s-test5-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.test5.i-i-s-test5-заказ-l.title'),
            children: null
          }, {
            link: 'i-i-s-test5-клиент-l',
            caption: i18n.t('forms.application.sitemap.test5.i-i-s-test5-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.test5.i-i-s-test5-клиент-l.title'),
            icon: 'tags',
            children: null
          }]
        }
      ]
    };
  }),
})
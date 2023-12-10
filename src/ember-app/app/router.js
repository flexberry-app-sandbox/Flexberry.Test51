import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test5-заказ-l');
  this.route('i-i-s-test5-заказ-e',
  { path: 'i-i-s-test5-заказ-e/:id' });
  this.route('i-i-s-test5-заказ-e.new',
  { path: 'i-i-s-test5-заказ-e/new' });
  this.route('i-i-s-test5-клиент-l');
  this.route('i-i-s-test5-клиент-e',
  { path: 'i-i-s-test5-клиент-e/:id' });
  this.route('i-i-s-test5-клиент-e.new',
  { path: 'i-i-s-test5-клиент-e/new' });
  this.route('i-i-s-test5-сотрудник-l');
  this.route('i-i-s-test5-сотрудник-e',
  { path: 'i-i-s-test5-сотрудник-e/:id' });
  this.route('i-i-s-test5-сотрудник-e.new',
  { path: 'i-i-s-test5-сотрудник-e/new' });
  this.route('i-i-s-test5-товар-l');
  this.route('i-i-s-test5-товар-e',
  { path: 'i-i-s-test5-товар-e/:id' });
  this.route('i-i-s-test5-товар-e.new',
  { path: 'i-i-s-test5-товар-e/new' });
});

export default Router;

import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test5-строка-заказа', 'Unit | Model | i-i-s-test5-строка-заказа', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-test5-заказ',
    'model:i-i-s-test5-клиент',
    'model:i-i-s-test5-сотрудник',
    'model:i-i-s-test5-строка-заказа',
    'model:i-i-s-test5-товар',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

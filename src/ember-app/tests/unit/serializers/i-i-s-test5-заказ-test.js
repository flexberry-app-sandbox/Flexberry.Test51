import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test5-заказ', 'Unit | Serializer | i-i-s-test5-заказ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test5-заказ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-test5-состояния',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

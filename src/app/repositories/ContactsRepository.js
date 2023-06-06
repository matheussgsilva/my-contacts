// eslint-disable-next-line import/no-extraneous-dependencies
const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Matheus',
    email: 'matheus@email.com',
    phone: '12999999999',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();

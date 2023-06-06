// eslint-disable-next-line import/no-extraneous-dependencies
const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Matheus',
    email: 'matheus@email.com',
    phone: '12999999999',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Lucianne',
    email: 'lucianne@email.com',
    phone: '12999999999',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(
        contacts.find((contact) => contact.id === id),
      );
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      resolve(
        contacts = contacts.filter((contact) => contact.id !== id),
      );
    });
  }
}

module.exports = new ContactsRepository();

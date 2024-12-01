'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Positions',
      [
        { name: 'CTO' },
        { name: 'Senior Software Engineer' },
        { name: 'Software Engineer' },
        { name: 'Junior Software Engineer' },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Positions', null, {});
  },
};

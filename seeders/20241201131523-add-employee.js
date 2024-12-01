'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'employee',
      [
        {
          name: 'Employee 1',
          positionId: 1,
          managerId: null,
        },
        {
          name: 'Employee 2',
          positionId: 2,
          managerId: 1,
        },
        {
          name: 'Employee 3',
          positionId: 2,
          managerId: 1,
        },
        {
          name: 'Employee 4',
          positionId: 2,
          managerId: 1,
        },
        {
          name: 'Employee 5',
          positionId: 3,
          managerId: 4,
        },
        {
          name: 'Employee 6',
          positionId: 2,
          managerId: 1,
        },
        {
          name: 'Employee 7',
          positionId: 1,
          managerId: null,
        },
        {
          name: 'Employee 8',
          positionId: 1,
          managerId: null,
        },
        {
          name: 'Employee 9',
          positionId: 4,
          managerId: 5,
        },
        {
          name: 'Employee 10',
          positionId: 2,
          managerId: 7,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('employee', null, {});
  },
};

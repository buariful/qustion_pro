const jwt = require('jsonwebtoken');
const { db_name, jwt_secret } = require('../../config');
const db = require('../../models');

const { sequelize, Employee } = db;

const buildHierarchy = async (managerId) => {
  // getting the employees
  let sql = `
    SELECT
        E.id,
        E.name,
        E.positionId,
        E.managerId,
        P.name as positionName
    FROM ${db_name}.employee E
    LEFT JOIN ${db_name}.positions P
    ON E.positionId = P.id
  `;

  if (managerId) {
    const manager = await Employee.findOne({ where: { id: managerId } });
    sql += `WHERE E.positionId >= ${manager?.positionId}`;
  }

  const [employees] = await sequelize.query(sql);

  // build the hierarchy
  const employeeMap = {};
  const hierarchy = [];

  employees.forEach((employee) => {
    const currentEmployee = { ...employee, child: null };
    employeeMap[employee.id] = currentEmployee;

    if (employee.managerId) {
      const manager = employeeMap[employee.managerId];
      if (manager && !manager.child) {
        manager.child = [];
      }
      manager?.child.push(currentEmployee);
    } else {
      hierarchy.push(currentEmployee);
    }
  });

  return managerId ? employeeMap[managerId]?.child || [] : hierarchy;
};

const createJWTToken = async (employeeId) => {
  // checking if valid user id
  const findEmployee = await Employee.findByPk(employeeId);
  if (!findEmployee) throw new Error('Invalid user id');

  const token = jwt.sign({ id: employeeId }, jwt_secret, { expiresIn: '1h' });

  return token;
};

module.exports = {
  buildHierarchy,
  createJWTToken,
};

const authMiddleware = require('../src/middlewares/authMiddleware');
const {
  getEmployeeHierarchy,
  getManagerEmployeeHierarchy,
  getJWTToken,
} = require('../controllers/employee.controller');
const router = require('express').Router();

router.get('/get-employee-hierarchy', getEmployeeHierarchy);
router.get(
  '/get-employee-hierarchy/:managerId',
  authMiddleware,
  getManagerEmployeeHierarchy,
);
router.get('/get-jwt-token/:employeeId', getJWTToken);

module.exports = {
  EmployeeRoutes: router,
};

const { EmployeeRoutes } = require('./employee.route');

const router = require('express').Router();

const moduleRoutes = [
  {
    path: '/employee',
    route: EmployeeRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

module.exports = router;

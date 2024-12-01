const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../../config');
const db = require('../../models');
const { Employee } = db;

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token)
    return res
      .status(403)
      .json({ error: true, message: 'No token provided', data: null });

  jwt.verify(token, jwt_secret, async (err, user) => {
    if (err) {
      return res
        .status(401)
        .json({ error: true, message: 'Invalid token', data: null });
    }

    const employee = await Employee.findByPk(user.id);

    if (!employee)
      return res
        .status(401)
        .json({ error: true, message: 'Invalid token', data: null });

    req.user = employee;
    next();
  });
};

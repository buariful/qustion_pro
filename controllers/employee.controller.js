const EmployeeService = require('../src/services/employee.service');

const getEmployeeHierarchy = async (req, res) => {
  try {
    const hierarchy = await EmployeeService.buildHierarchy();

    res.status(200).json({
      error: false,
      message: 'Employee hierarchy fetched successfully',
      data: hierarchy,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: error?.message || 'Something went wrong!',
      data: null,
    });
  }
};
const getManagerEmployeeHierarchy = async (req, res) => {
  try {
    const { managerId } = req.params;
    const hierarchy = await EmployeeService.buildHierarchy(managerId);

    res.status(200).json({
      error: false,
      message: 'Employee hierarchy fetched successfully',
      data: hierarchy,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: error?.message || 'Something went wrong!',
      data: null,
    });
  }
};

const getJWTToken = async (req, res) => {
  try {
    const { employeeId } = req.params;
    if (!employeeId) {
      return res.status(400).json({
        error: true,
        message: 'Employee id is required',
        data: null,
      });
    }

    const token = await EmployeeService.createJWTToken(employeeId);
    res.status(200).json({
      error: false,
      message: 'JWT token created successfully',
      data: token,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: error?.message || 'Something went wrong!',
      data: null,
    });
  }
};

module.exports = {
  getEmployeeHierarchy,
  getManagerEmployeeHierarchy,
  getJWTToken,
};

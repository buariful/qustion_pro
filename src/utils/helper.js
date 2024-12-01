const Position = require('../modules/position/position.model');

const getCustomEmployees = async (NUM_EMPLOYEES = 10) => {
  // Generate Positions
  // const positions = [
  //   { id: 1, name: 'CTO' },
  //   { id: 2, name: 'Senior Software Engineer' },
  //   { id: 3, name: 'Software Engineer' },
  //   { id: 4, name: 'Junior Software Engineer' },
  // ];

  const positions = await Position.findAll();

  // Generate Employees
  const employees = [];
  let idCounter = 1;

  // Function to assign a manager
  const getRandomManager = (maxId) => {
    if (maxId === 0) return null; // No manager for the first employee
    return Math.floor(Math.random() * maxId) + 1;
  };

  for (let i = 0; i < NUM_EMPLOYEES; i++) {
    const position = positions[Math.floor(Math.random() * positions.length)];
    const managerId = i === 0 ? null : getRandomManager(idCounter - 1); // First employee has no manager

    employees.push({
      name: `Employee ${idCounter}`,
      positionId: position.id,
      managerId: position.id === 1 ? null : managerId,
    });

    idCounter++;
  }

  return employees;
};

module.exports = {
  getCustomEmployees,
};

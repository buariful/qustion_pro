/* eslint-disable no-console */
const app = require('./app');
const config = require('./config/index');
console.log(config.db_adapter);
// const sequelize = require('./app/DB/dbConnection');
// const { seedDataIntoDB } = require('./app/DB/seedDataIntoDB.js');

const dbConnect = async () => {
  try {
    // await sequelize.authenticate();
    // console.log(
    //   'Connection to the database has been established successfully.',
    // );
    // await sequelize.sync({ alter: true });
    // console.log('Database synced successfully.');
    // seedDataIntoDB();
  } catch (error) {
    console.log('DB connection failed');
    console.error(error?.message);
    console.error(error?.stack);
  }
};

let server;
async function main() {
  try {
    await dbConnect();

    server = app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

process.on('unhandledRejection', (err) => {
  console.log(`unahandledRejection is detected , shutting down ...`, err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log(`uncaughtException is detected , shutting down ...`);
  process.exit(1);
});

// /* eslint-disable no-console */
// const app = require('./app');
// const config = require('./app/config');
// const sequelize = require('./app/DB/dbConnection');
// const { seedDataIntoDB } = require('./app/DB/seedDataIntoDB.js');

// const dbConnect = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log(
//       'Connection to the database has been established successfully.',
//     );

//     await sequelize.sync({ alter: true });
//     console.log('Database synced successfully.');
//     seedDataIntoDB();
//   } catch (error) {
//     console.log('DB connection failed');
//     console.error(error?.message);
//     console.error(error?.stack);
//   }
// };

// let server;
// async function main() {
//   try {
//     await dbConnect();

//     server = app.listen(config.port, () => {
//       console.log(`Server running on port ${config.port}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// main();

// process.on('unhandledRejection', (err) => {
//   console.log(`unahandledRejection is detected , shutting down ...`, err);
//   if (server) {
//     server.close(() => {
//       process.exit(1);
//     });
//   }
//   process.exit(1);
// });

// process.on('uncaughtException', () => {
//   console.log(`uncaughtException is detected , shutting down ...`);
//   process.exit(1);
// });

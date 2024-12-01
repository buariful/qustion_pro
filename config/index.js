const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.join(process.cwd(), '.env'),
});
/* 

*/
module.exports = {
  port: process?.env?.PORT,
  db_database: process?.env?.DB_DATABASE,
  db_username: process?.env?.DB_USERNAME,
  db_password: process?.env?.DB_PASSWORD,
  db_adapter: process?.env?.DB_ADAPTER,
  db_name: process?.env?.DB_NAME,
  db_hostname: process?.env?.DB_HOSTNAME,
  db_port: process?.env?.DB_PORT,

  jwt_secret: process?.env?.JWT_SECRET,
};

require('dotenv').config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require('sequelize');
console.log(CONNECTION_STRING);

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
});


// Check if process.env is successfully connected
if (sequelize) {
  console.log('process.env is successfully connected.');
} else {
  console.log('Error connecting to process.env.');
}

module.exports = {
  sequelize
};
 
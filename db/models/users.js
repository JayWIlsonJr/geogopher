/*
 * db/models/users.js
 *
 */

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('users', {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    google_id: {
      type: Sequelize.STRING,
      allowNull: true
    },
    username: {
      type: Sequelize.STRING,
      allowNull: true
    },
    password_hash: {
      type: Sequelize.STRING,
      allowNull: true
    },
    password_salt: {
      type: Sequelize.STRING,
      allowNull: true
    },
    count_games_played: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    last_login: {
      type: Sequelize.DATE,
      allowNull: true
    },
    is_first_login: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      default: true
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        isEmail: true
      }
    },
    user_ip: {
      type: Sequelize.STRING,
      allowNull: true
    },
    token: {
      type: Sequelize.STRING,
      allowNull: true
    },
  })
};

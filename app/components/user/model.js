"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fcm_registration_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.fn('now')
    },
    imei: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 'email_not_informed',
      unique: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    tableName: 'user',
    timestamps: false
  });

  return User;
};
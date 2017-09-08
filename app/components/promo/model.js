"use strict";

module.exports = function(sequelize, DataTypes) {
  var Promo = sequelize.define('promo', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.fn('now')
    },
    expires_at: {
      type: DataTypes.TIME,
      allowNull: false
    },
    idstore: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'store',
        key: 'id'
      }
    },
    hash: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    published_at: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.fn('now')
    },
    case_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    tableName: 'promo',
    timestamps: false
  });

  return Promo;
};
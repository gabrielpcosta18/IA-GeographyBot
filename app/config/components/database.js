const joi = require('joi');
const Sequelize = require('sequelize');

const envVarsSchema = joi.object({  
  DATABASE_NAME: joi.string()
    .required(),
  DATABASE_HOST: joi.string()
    .required(),
  DATABASE_USERNAME: joi.string()
    .required(),
  DATABASE_PASSWORD: joi.string()
    .required(),  
  DATABASE_PORT: joi.number()
    .required(),
  DATABASE_DIALETIC: joi.string()
    .required()
}).unknown()
  .required();

const { error, value: envVars } = joi.validate(process.env, envVarsSchema);
if (error) {  
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {  
  db: {
    url: envVars.DATABASE_DIALETIC + '://' + envVars.DATABASE_USERNAME +':'+envVars.DATABASE_PASSWORD+'@' +
      envVars.DATABASE_HOST + ':' + envVars.DATABASE_PORT + '/' + envVars.DATABASE_NAME
  }
};

module.exports = config;
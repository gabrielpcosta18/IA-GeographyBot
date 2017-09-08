var exec = require('child_process').exec;
var env = require('./env');

function getEnvStatement(env, platform) {
  var commandLine = '';
  var setCommand = platform === 'win32'? 'set ' : 'export '; 
  Object.keys(env).forEach((variableKey) => {
      if(env[variableKey] instanceof Object) {
          Object.keys(env[variableKey]).forEach((innerVariableKey) => {
              commandLine = setCommand + variableKey + '_' + innerVariableKey + "=" + env[variableKey][innerVariableKey] + '&&' + commandLine;
          });
      }
      else {
          commandLine = setCommand + variableKey + "=" + env[variableKey] + '&&' + commandLine;
      }
  }); 
  return commandLine;
}

var variables = {};

if(process.argv.length > 2) {
  var execType = process.argv[2];
  
  if(!execType.indexOf('DEV')) {
    variables = env.development;    
  }
  else variables = env.production;
}
else variables = env.development;

var command_line = 'node ./index.js';

command_line = getEnvStatement(variables, process.platform) + command_line;

var command = exec(command_line);

command.stdout.on('data', function(data) {
  process.stdout.write(data);
});

command.stderr.on('data', function(data) {
  process.stderr.write(data);
});

command.on('error', function(err) {
  process.stderr.write(err);
});
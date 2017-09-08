var model = require('../index');

module.exports = function() {
    var controller = {};
    
    controller.listUsers = function(request, response) {
        model.User.findAll().then(users => {
            res = {};
            return response.status(200).send(users);
        });
    }

    return controller;
}
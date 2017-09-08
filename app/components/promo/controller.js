var model = require('../index');

module.exports = function() {
    var controller = {};
    
    controller.listPromos = function(request, response) {
        model.Promo.findAll().then(promos => {
            res = {};
            return response.status(200).send(promos);
        });
    }

    return controller;
}
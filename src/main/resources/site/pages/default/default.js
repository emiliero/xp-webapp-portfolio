var portal = require('/lib/xp/portal'); 
var thymeleaf = require('/lib/thymeleaf');

exports.get = function(req) {
    var model = {};
    var view = resolve('default.html');

    return {
        body: thymeleaf.render(view, model)
    };
};
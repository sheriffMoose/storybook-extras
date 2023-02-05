
module.exports = function (Handlebars) {
    require('./helpers/scopes')(Handlebars);
    require('./helpers/unique')(Handlebars);
};

require('handlebars-helpers')();

module.exports = function (Handlebars) {
    require('./helpers/href')(Handlebars);
    require('./helpers/scopes')(Handlebars);
    require('./helpers/unique')(Handlebars);
};

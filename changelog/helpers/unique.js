const _ = require('lodash');

module.exports = function (Handlebars) {
    Handlebars.registerHelper('forEachUnique', function (array, options) {
        let buffer = '';
        _.uniqBy(array, JSON.stringify).forEach(entry => {
            buffer += options.fn(entry);
        });
        return buffer;
    });
};

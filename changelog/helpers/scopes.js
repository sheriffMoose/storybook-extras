const _ = require('lodash');

module.exports = function (Handlebars) {
    Handlebars.registerHelper('forEachScope', function (array, options) {
        const { scopes } = require('../config.json');
        const groups = _.groupBy(
            array.map(entry => {
                // prettier-ignore
                const subject = entry?.commit?.subject || entry?.subject || '';
                const match = /^(?<type>.+)\((?<scope>.+)\):\s(?<message>.+)$/.exec(subject);
                const { type, scope, message } = match?.groups || {};
                entry.scope = scope || 'others';
                entry.type = type || 'N/A';
                entry.message = message || subject;
                return entry;
            }),
            'scope',
        );

        const keys = _.orderBy(_.keys(groups), key => scopes.findIndex(scope => scope.key == key), ['asc']);
        return _.reduce(keys, (acc, key) => {
            const img = scopes.find(x => x.key === key)?.img;
            return acc + options.fn({ key, img, items: groups[key] });
        }, '');
    });
};

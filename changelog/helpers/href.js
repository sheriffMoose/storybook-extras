module.exports = function (Handlebars) {
    Handlebars.registerHelper('href', function (data, options) {
        const id = data?.shorthash || data?.id;
        const href = data?.href;
        return `[\`${id}\`](${href})`;
    });
};

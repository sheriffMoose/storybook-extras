export const checkBoolean = (variable, defaultValue) => {
    if (defaultValue === true) {
        return variable !== false;
    } else if (defaultValue === false) {
        return variable === true;
    } else {
        return variable;
    }
};

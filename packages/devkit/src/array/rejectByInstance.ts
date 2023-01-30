export const rejectByInstance = (collection, classes) => {
    collection = collection || [];
    classes = classes || [];
    return collection.filter(item => !classes.some(itemClass => item instanceof itemClass));
};

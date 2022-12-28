import memoize from 'memoizerific';
import { SelectorItem } from './types';

export const createSelectorItem = memoize(1000)((
    id: string,
    name: string,
    value: string,
    change: (arg: { selected: string; name: string }) => void,
    active: boolean
): SelectorItem => {
    return {
        id: id || name,
        title: name,
        value,
        active,
        onClick: () => {
            change({ selected: value, name });
        },
    };
});

export const getDisplayedItems = memoize(10)((
    items: any[],
    selectedItem: string | null,
    change: (arg: { selected: string; name: string }) => void
) => {
    const selectorItems = items.map(({ name, value }) =>
        createSelectorItem(
            null,
            name,
            value,
            change,
            value === selectedItem,
        )
    );

    return selectorItems;
});


export const getItemByName = (selectedValue: string, items: any[] = [], defaultName: string) => {
    const defaultItem = items.find((item) => item.name === defaultName);
    const selectedItem = items.find((item) => item.value === selectedValue);

    return selectedItem || defaultItem || { value: '' };
};


export const getSourceCodeItems = (docs, context) => {
    const components = docs.components.filter(x => context.components.includes(x.name));
    const services = docs.injectables.filter(x => context.services.includes(x.name));

    return components.reduce((arr, component) => {
        arr.push(component);
        if (component.templateUrl.length) {
            arr.push({
                id: `${component.id}-html`,
                file: `/${component.templateUrl[0]}`,
                sourceCode: component.templateData,
                language: 'html'
            });
        }
        component.styleUrlsData.forEach((x, i) => {
            arr.push({
                id: `${component.id}-css-${i}`,
                file: `/${x.styleUrl}`,
                sourceCode: x.data,
                language: 'css'
            });
        });

        return arr;
    }, [])
        .concat(services)
        .filter(Boolean);
}
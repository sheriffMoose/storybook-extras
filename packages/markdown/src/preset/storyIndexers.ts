import { getIndexer } from '@storybook-extras/devkit/markdown';

export const storyIndexers = (indexers, addonOptions) => {
    const test = /\.(md|html)$/;
    const indexer = getIndexer(addonOptions);

    return [{ test, indexer }, ...(indexers || [])];
};

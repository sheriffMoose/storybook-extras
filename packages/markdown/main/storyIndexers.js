import { getIndexer } from '../utils';

export function storyIndexers(indexers, addonOptions) {
    const test = /\.(md|html)$/;
    const indexer = getIndexer(addonOptions);

    return [{ test, indexer }, ...(indexers || [])];
}

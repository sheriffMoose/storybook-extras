import { addons, types } from '@storybook/manager-api';
import React, { Fragment } from 'react';
import { AddonContextProvider, SourceCode, WrapperSelector } from './components';
import { ADDON_ID, SOURCE_CODE_PANEL_ID, SOURCE_CODE_PARAM_KEY, WRAPPERS_PARAM_KEY, WRAPPERS_TOOL_ID } from './utils/constants';

addons.register(ADDON_ID, api => {
    addons.add(WRAPPERS_TOOL_ID, {
        title: 'Wrappers',
        type: types.TOOL,
        paramKey: WRAPPERS_PARAM_KEY,
        match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
        render: () => (
            <Fragment>
                <WrapperSelector />
            </Fragment>
        ),
    });

    addons.add(SOURCE_CODE_PANEL_ID, {
        title: 'Source Code',
        type: types.PANEL,
        paramKey: SOURCE_CODE_PARAM_KEY,
        render: ({ active = true, key }) => (
            <AddonContextProvider key={key} active={active}>
                <SourceCode />
            </AddonContextProvider>
        ),
    });
});

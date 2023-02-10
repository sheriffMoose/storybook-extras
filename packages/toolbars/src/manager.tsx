import { useParameter } from '@storybook/api';
import { addons, types } from '@storybook/manager-api';
import React, { Fragment } from 'react';

import { ADDON_ID, PARAM_KEY, TOOL_NAME } from './types';
import { ToolbarButton } from './components/ToolbarButton';

addons.register(ADDON_ID, () => {
    addons.add(ADDON_ID, {
        title: TOOL_NAME,
        type: types.TOOL,
        match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
        render: () => {
            const toolbars = useParameter(PARAM_KEY, []);

            return (
                <Fragment>
                    {toolbars.map(button => (
                        <ToolbarButton key={button.key} button={button} />
                    ))}
                </Fragment>
            );
        },
    });
});

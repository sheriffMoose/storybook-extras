import React, { Fragment } from 'react';
import { addons, types } from '@storybook/manager-api';
import { useAddonState, useChannel } from '@storybook/api';
import { AddonPanel } from '@storybook/components';
import { AddonContextProvider, SourceCode, WrapperSelector } from '../components';
import { ADDON_ID, EVENTS, PANEL_ID, SOURCE_CODE_PARAM_KEY, TOOL_ID, WRAPPERS_PARAM_KEY } from '../constants';

const DEFAULT_STATE = { docs: null, components: [], services: [] };

addons.register(ADDON_ID, (api) => {
  addons.add(TOOL_ID, {
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

  addons.add(PANEL_ID, {
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


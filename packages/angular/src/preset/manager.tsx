import React from 'react';
import { addons, types } from "@storybook/addons";
import { useAddonState, useChannel } from "@storybook/api";
import { AddonPanel } from "@storybook/components";
import { SourceCode, WrapperSelector } from "../components";
import { ADDON_ID, EVENTS, PANEL_ID, TOOL_ID } from "../constants";

const DEFAULT_STATE = { docs: null, components: [], services: [] };

addons.register(ADDON_ID, (api) => {
  addons.add(TOOL_ID, {
    title: "Wrappers",
    type: types.TOOL,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: WrapperSelector,
  });

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Source Code",
    match: ({ viewMode }) => viewMode === "story",
    render: ({ active, key }) => {
      const [state, setState] = useAddonState(ADDON_ID, DEFAULT_STATE);
      useChannel({ [EVENTS.SET_CONTEXT]: context => setState(context) });

      return (
        <AddonPanel key={key} active={active}>
          <SourceCode api={api} state={state} />
        </AddonPanel>
      );
    }
  });

});


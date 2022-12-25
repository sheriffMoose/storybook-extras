import { addons, types } from "@storybook/addons";

import {
  ADDON_ID,
  TOOL_ID,
  PANEL_ID,
  TAB_ID,
} from "../constants";
import { Tool } from "../containers/Tool";
import { Panel } from "../containers/Panel";
import { Tab } from "../containers/Tab";

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    title: "Wrappers",
    type: types.TOOL,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: Tool,
  });

  // // Register the panel
  // addons.add(PANEL_ID, {
  //   type: types.PANEL,
  //   title: "My addon",
  //   match: ({ viewMode }) => viewMode === "story",
  //   render: Panel,
  // });

  // // Register the tab
  // addons.add(TAB_ID, {
  //   type: types.TAB,
  //   title: "My addon",
  //   //👇 Checks the current route for the story
  //   route: ({ storyId }) => `/myaddon/${storyId}`,
  //   //👇 Shows the Tab UI element in myaddon view mode
  //   match: ({ viewMode }) => viewMode === "myaddon",
  //   render: Tab,
  // });
});


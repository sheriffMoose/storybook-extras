import React from "react";
import { useParameter } from "@storybook/api";
import { PARAM_KEY } from "../constants";
import { TabContent } from "../components/TabContent";

interface TabProps {
  active: boolean;
}

export const Tab: React.FC<TabProps> = ({ active }) => {
  const paramData = useParameter<string>(PARAM_KEY, "");

  return active ? <TabContent code={paramData} /> : null;
};

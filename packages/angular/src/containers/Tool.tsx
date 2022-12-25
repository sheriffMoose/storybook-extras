import { useGlobals, useParameter } from "@storybook/api";
import { IconButton, Icons, TooltipLinkList, WithTooltip } from "@storybook/components";
import React, { FC, Fragment, memo, useCallback, useMemo } from "react";
import { WRAPPERS_PARAM_KEY } from "../constants";
import { getDisplayedItems, getValueByName } from '../helpers';
import { WrapperConfig } from "../types";

const DEFAULT_CONFIG: WrapperConfig = {
  default: null,
  disable: true,
  values: [],
};

export const Tool: FC = memo(() => {
  const config = useParameter<WrapperConfig>(WRAPPERS_PARAM_KEY, DEFAULT_CONFIG);

  const [globals, updateGlobals] = useGlobals();
  const globalValue = globals[WRAPPERS_PARAM_KEY]?.value;

  const selectedValue = useMemo(() => {
    return getValueByName(globalValue, config.values, config.default);
  }, [config, globalValue]);

  const onChange = useCallback(
    (value: string) => {
      updateGlobals({ [WRAPPERS_PARAM_KEY]: { value } });
    },
    [config, globals, updateGlobals]
  );

  if (config.disable) {
    return null;
  }

  return (
    <Fragment>
      <WithTooltip
        placement="top"
        trigger="click"
        closeOnClick
        tooltip={({ onHide }) => {
          const links = getDisplayedItems(config.values, selectedValue, ({ selected }) => {
            if (selectedValue !== selected) {
              onChange(selected);
            }
            onHide();
          });
          return (<TooltipLinkList links={links} />);
        }}
      >
        <IconButton
          key="wrapper"
          title="Change the wrapper of the story."
          active={selectedValue !== ''}
        >
          <Icons icon="contrast" />
        </IconButton>
      </WithTooltip>
    </Fragment>
  );
});

import type { FC } from 'react';
import React, { memo } from 'react';

import { IconButton, Icons } from '@storybook/components';
import { useGlobals, useParameter } from '@storybook/manager-api';

import { ToolbarsParameter } from '../types';

const ButtonIcon: FC<any> = ({ button }) => {
    const { icon, emoji, isDisabled } = button;
    if (icon) {
        return <Icons icon={icon} />;
    } else if (emoji) {
        return <span>{emoji}</span>;
    } else {
        return null;
    }
};

export const ToolbarButton: FC<any> = memo(({ button }: { button: ToolbarsParameter }) => {
    const parameter = useParameter(button.key, { enable: false });
    if (parameter?.enable === false) {
        return null;
    }

    const [globals, updateGlobals] = useGlobals();
    const isActive = globals[button.key] || false;
    const isDisabled = button?.isDisabled(globals, parameter);
    const onClick = () => {
        updateGlobals({ [button.key]: !isActive });
    };

    if(isDisabled) {
        return null;
    }

    return (
        <IconButton key={button.key} title={button.title} active={isActive} onClick={onClick}>
            <ButtonIcon button={button} />
        </IconButton>
    );
});

import * as React from 'react';
import { useChannel, useAddonState, useStorybookApi } from '@storybook/manager-api';
import { ADDON_ID, EVENTS } from '../constants';

const DEFAULT_STATE: State = { context: null };

export interface State {
    context: any;
}

interface AddonContextStore {
    state: State;
    setState: (state: State) => void;
}

export const AddonContext = React.createContext<AddonContextStore>({
    state: { context: null },
    setState: () => {},
});

export const AddonContextProvider: React.FC<any> = ({ active, ...props }) => {
    const [state, setState] = useAddonState(ADDON_ID, DEFAULT_STATE);

    useChannel({
        [EVENTS.SET_SOURCE_CODE]: React.useCallback(context => {
            setState({ context });
        }, []),
    });

    if (!active) return null;

    return (
        <AddonContext.Provider
            value={{
                state,
                setState,
            }}
            {...props}
        />
    );
};

export const useAddonContext = () => React.useContext(AddonContext);

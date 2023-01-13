import * as React from 'react';
import { useAddonState, useChannel } from '@storybook/manager-api';
import { ADDON_ID, EVENTS } from '../constants';

const DEFAULT_STATE = { docs: null, components: [], services: [] };

export interface State {
    docs: any;
    components: any[];
    services: any[];
}

interface AddonContextStore {
    state: State;
    setState: (state: State) => void;
}

export const AddonContext = React.createContext<AddonContextStore>({
    state: {
        docs: null,
        components: [],
        services: [],
    },
    setState: () => { },
});


export const AddonContextProvider: React.FC<any> = ({ active, ...props }) => {
    const [state, setState] = useAddonState(ADDON_ID, DEFAULT_STATE);

    useChannel({
        [EVENTS.SET_CONTEXT]: React.useCallback((context) => {
            setState(context);
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

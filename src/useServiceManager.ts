import { getDefaultContext } from './defaultContext';

function useServiceManager() {
    const context = getDefaultContext();

    return context;
}

export {
    useServiceManager as default,
};

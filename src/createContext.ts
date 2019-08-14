import ServiceContext from './serviceContext';
import { ServiceDefinitions } from './serviceMap';
import { setDefaultContext } from './defaultContext';

function createContext(...definitions: ServiceDefinitions): ServiceContext {
    const context = new ServiceContext(...definitions);

    setDefaultContext(context);

    return context;
}

export {
    createContext as default,
};

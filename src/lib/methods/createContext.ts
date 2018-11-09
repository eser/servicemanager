import ServiceContext from '../serviceContext';
import ServiceTarget from '../serviceTarget';

function createContext(configuration?: (ServiceContext) => void): ServiceContext {
    const serviceContext = new Map<any, ServiceTarget>();

    if (configuration !== undefined) {
        configuration(serviceContext);
    }

    return serviceContext;
}

export {
    createContext as default,
};

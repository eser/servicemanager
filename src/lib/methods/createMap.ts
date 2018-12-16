import ServiceMap from '../serviceMap';
import ServiceTarget from '../serviceTarget';

function createMap(configuration?: (ServiceMap) => void): ServiceMap {
    const serviceMap = new Map<any, ServiceTarget>();

    if (configuration !== undefined) {
        configuration(serviceMap);
    }

    return serviceMap;
}

export {
    createMap as default,
};

import ServiceMap, { ServiceMapPair, ServiceDefinitions } from '../serviceMap';
import ServiceTarget from '../serviceTarget';

function createMap(...definitions: ServiceDefinitions): ServiceMap {
    if (definitions.length === 0 || definitions[0].constructor !== Function) {
        return new Map<any, ServiceTarget>(<Array<ServiceMapPair>>definitions);
    }

    const serviceMap = new Map<any, ServiceTarget>();

    (<(ServiceMap: any) => void>definitions[0])(serviceMap);

    return serviceMap;
}

export {
    createMap as default,
};

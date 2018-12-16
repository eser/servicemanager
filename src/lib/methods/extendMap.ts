import ServiceMap from '../serviceMap';
import ServiceTarget from '../serviceTarget';

function extendMap(map: ServiceMap, configuration: (ServiceMap) => void): ServiceMap {
    const newMap = new Map<any, ServiceTarget>(map);

    configuration(newMap);

    return newMap;
}

export {
    extendMap as default,
};

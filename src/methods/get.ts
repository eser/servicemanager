import ServiceMap from '../serviceMap';
import ServiceType from '../serviceType';

function get(map: ServiceMap, dependency: any): any {
    const serviceTarget = map.get(dependency);

    if (serviceTarget === undefined) {
        return undefined;
    }

    if (serviceTarget.type === ServiceType.Singleton ||
        !(serviceTarget.target instanceof Function)) {
        return serviceTarget.target;
    }

    // TODO pass service context as a parameter
    return serviceTarget.target();
}

export {
    get as default,
};

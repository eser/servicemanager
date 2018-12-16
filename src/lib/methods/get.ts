import ServiceMap from '../serviceMap';
import ServiceLifetime from '../serviceLifetime';

function get(map: ServiceMap, dependency: any): any {
    const serviceTarget = map.get(dependency);

    if (serviceTarget === undefined) {
        return undefined;
    }

    if (serviceTarget.lifetime === ServiceLifetime.Singleton ||
        !(serviceTarget.target instanceof Function)) {
        return serviceTarget.target;
    }

    return serviceTarget.target();
}

export {
    get as default,
};

import ServiceMap from '../serviceMap';
import ServiceTarget from '../serviceTarget';

type FilterPredicate = (serviceTarget: ServiceTarget, dependency: any) => boolean;

function filter(map: ServiceMap, predicate: FilterPredicate): Array<string> {
    const result: Array<string> = [];

    for (const [ dependency, serviceDefinition ] of map.entries()) {
        if (predicate(serviceDefinition, dependency)) {
            result.push(dependency);
        }
    }

    return result;
}

export {
    filter as default,
    FilterPredicate,
};

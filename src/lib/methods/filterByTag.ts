import ServiceMap from '../serviceMap';
import filter from './filter';

function filterByTag(map: ServiceMap, tag: string): Array<string> {
    return filter(map, (serviceTarget) => serviceTarget.tags.indexOf(tag) >= 0);
}

export {
    filterByTag as default,
};

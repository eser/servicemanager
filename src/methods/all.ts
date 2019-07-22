import ServiceMap from '../serviceMap';

function all(map: ServiceMap): Array<string> {
    return Array.from(map.keys());
}

export {
    all as default,
};

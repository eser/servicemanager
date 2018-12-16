import ServiceMap from '../serviceMap';
import getRange from './getRange';

async function ensure(map: ServiceMap, dependencies: Array<any>, callback: (...services: Array<any>) => any): Promise<any> {
    const serviceResolutions = getRange(map, ...dependencies);

    const services = await Promise.all(serviceResolutions);
    const result = await callback(...services);

    return result;
}

export {
    ensure as default,
};

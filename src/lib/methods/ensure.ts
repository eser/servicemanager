import ServiceContext from '../serviceContext';
import getRange from './getRange';

async function ensure(context: ServiceContext, dependencies: Array<any>, callback: (...services: Array<any>) => any): Promise<any> {
    const serviceResolutions = getRange(context, ...dependencies);

    const services = await Promise.all(serviceResolutions);
    const result = await callback(...services);

    return result;
}

export {
    ensure as default,
};

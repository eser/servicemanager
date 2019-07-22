import ServiceMap from '../serviceMap';
import get from './get';

function getRange(map: ServiceMap, ...dependencies: Array<any>): Array<any> {
    return dependencies.map(
        dependency => get(map, dependency),
    );
}

export {
    getRange as default,
};

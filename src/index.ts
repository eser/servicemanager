// import 'reflect-metadata';

import useServiceManager from './useServiceManager';
import ServiceContext from './serviceContext';
import ServiceMap from './serviceMap';
import ServiceType from './serviceType';
import singleton from './types/singleton';
import factory from './types/factory';
import all from './methods/all';
import createMap from './methods/createMap';
import ensure from './methods/ensure';
import extendMap from './methods/extendMap';
import filter, { FilterPredicate } from './methods/filter';
import filterByTag from './methods/filterByTag';
import get from './methods/get';
import getRange from './methods/getRange';

// function someFunc(a: number, b: string) {}
// console.log(Reflect.getMetadata('design:types', someFunc)); // Number, String

export {
    useServiceManager as default,
    useServiceManager,
    ServiceContext,
    ServiceMap,
    ServiceType,
    singleton,
    factory,
    all,
    createMap,
    ensure,
    extendMap,
    filter,
    FilterPredicate,
    filterByTag,
    get,
    getRange,
};

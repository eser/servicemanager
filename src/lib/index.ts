import ServiceManager from './serviceManager';
import ServiceContext from './serviceContext';
import ServiceLifetime from './serviceLifetime';
import singleton from './singleton';
import transient from './transient';
import all from './methods/all';
import createContext from './methods/createContext';
import ensure from './methods/ensure';
import filter, { FilterPredicate } from './methods/filter';
import filterByTag from './methods/filterByTag';
import get from './methods/get';
import getRange from './methods/getRange';

export {
    ServiceManager as default,
    ServiceContext,
    ServiceLifetime,
    singleton,
    transient,
    all,
    createContext,
    ensure,
    filter,
    FilterPredicate,
    filterByTag,
    get,
    getRange,
};

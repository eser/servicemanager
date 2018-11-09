import ServiceContext from './serviceContext';
import all from './methods/all';
import createContext from './methods/createContext';
import ensure from './methods/ensure';
import filter, { FilterPredicate } from './methods/filter';
import filterByTag from './methods/filterByTag';
import get from './methods/get';
import getRange from './methods/getRange';

class ServiceManager {
    context: ServiceContext;

    constructor(configuration?: (ServiceContext) => void) {
        this.context = createContext(configuration);
    }

    get(dependency: any): any {
        return get(this.context, dependency);
    }

    getRange(...dependencies: Array<any>): Array<any> {
        return getRange(this.context, ...dependencies);
    }

    async ensure(dependencies: Array<any>, callback: (...services: Array<any>) => any): Promise<any> {
        const result = await ensure(this.context, dependencies, callback);

        return result;
    }

    all(): Array<string> {
        return all(this.context);
    }

    filter(predicate: FilterPredicate): Array<string> {
        return filter(this.context, predicate);
    }

    filterByTag(tag: string): Array<string> {
        return filterByTag(this.context, tag);
    }
}

export {
    ServiceManager as default,
};

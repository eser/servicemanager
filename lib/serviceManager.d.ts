import ServiceContext from './serviceContext';
import { FilterPredicate } from './methods/filter';
declare class ServiceManager {
    context: ServiceContext;
    constructor(configuration?: (ServiceContext: any) => void);
    get(dependency: any): any;
    getRange(...dependencies: Array<any>): Array<any>;
    ensure(dependencies: Array<any>, callback: (...services: Array<any>) => any): Promise<any>;
    all(): Array<string>;
    filter(predicate: FilterPredicate): Array<string>;
    filterByTag(tag: string): Array<string>;
}
export { ServiceManager as default, };

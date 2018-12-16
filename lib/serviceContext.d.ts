import ServiceMap from './serviceMap';
import { FilterPredicate } from './methods/filter';
declare class ServiceContext {
    map: ServiceMap;
    constructor(map?: ((ServiceMap: any) => void) | ServiceMap);
    extend(configuration: (ServiceMap: any) => void): ServiceContext;
    get(dependency: any): any;
    getRange(...dependencies: Array<any>): Array<any>;
    ensure(dependencies: Array<any>, callback: (...services: Array<any>) => any): Promise<any>;
    all(): Array<string>;
    filter(predicate: FilterPredicate): Array<string>;
    filterByTag(tag: string): Array<string>;
}
export { ServiceContext as default, };

declare enum ServiceType {
    Factory = "factory",
    Singleton = "singleton"
}

interface ServiceTarget {
    target: any;
    type: ServiceType;
    tags: Array<string>;
}

declare type ServiceMap = Map<any, ServiceTarget>;
declare type ServiceMapPair = [any, ServiceTarget];
declare type ServiceDefinitions = Array<ServiceMapPair> | Array<(ServiceMap: any) => void>;

declare type FilterPredicate = (serviceTarget: ServiceTarget, dependency: any) => boolean;
declare function filter(map: ServiceMap, predicate: FilterPredicate): Array<string>;

declare class ServiceContext {
    map: ServiceMap;
    constructor(...definitions: ServiceDefinitions);
    get(dependency: any): any;
    getRange(...dependencies: Array<any>): Array<any>;
    ensure(dependencies: Array<any>, callback: (...services: Array<any>) => any): Promise<any>;
    all(): Array<string>;
    filter(predicate: FilterPredicate): Array<string>;
    filterByTag(tag: string): Array<string>;
}

declare function useServiceManager(): ServiceContext | null;

declare function createContext(...definitions: ServiceDefinitions): ServiceContext;

declare function singleton(target: any, tags?: Array<string>): ServiceTarget;

declare function factory(target: any, tags?: Array<string>): ServiceTarget;

declare function all(map: ServiceMap): Array<string>;

declare function createMap(...definitions: ServiceDefinitions): ServiceMap;

declare function ensure(map: ServiceMap, dependencies: Array<any>, callback: (...services: Array<any>) => any): Promise<any>;

declare function filterByTag(map: ServiceMap, tag: string): Array<string>;

declare function get(map: ServiceMap, dependency: any): any;

declare function getRange(map: ServiceMap, ...dependencies: Array<any>): Array<any>;

export default useServiceManager;
export { FilterPredicate, ServiceContext, ServiceMap, ServiceType, all, createContext, createMap, ensure, factory, filter, filterByTag, get, getRange, singleton, useServiceManager };

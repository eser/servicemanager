import ServiceMap from '../serviceMap';
declare function ensure(map: ServiceMap, dependencies: Array<any>, callback: (...services: Array<any>) => any): Promise<any>;
export { ensure as default, };

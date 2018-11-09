import ServiceContext from '../serviceContext';
declare function ensure(context: ServiceContext, dependencies: Array<any>, callback: (...services: Array<any>) => any): Promise<any>;
export { ensure as default, };

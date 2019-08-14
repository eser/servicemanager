import ServiceTarget from './serviceTarget';
declare type ServiceMap = Map<any, ServiceTarget>;
declare type ServiceMapPair = [any, ServiceTarget];
declare type ServiceDefinitions = Array<ServiceMapPair> | Array<(ServiceMap: any) => void>;
export { ServiceMap as default, ServiceMapPair, ServiceDefinitions, };

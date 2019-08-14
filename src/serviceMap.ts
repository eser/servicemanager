import ServiceTarget from './serviceTarget';

type ServiceMap = Map<any, ServiceTarget>;
type ServiceMapPair = [ any, ServiceTarget ];
type ServiceDefinitions = Array<ServiceMapPair> | Array<(ServiceMap: any) => void>;

export {
    ServiceMap as default,
    ServiceMapPair,
    ServiceDefinitions,
};

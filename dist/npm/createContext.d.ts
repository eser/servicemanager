import ServiceContext from './serviceContext';
import { ServiceDefinitions } from './serviceMap';
declare function createContext(...definitions: ServiceDefinitions): ServiceContext;
export { createContext as default, };

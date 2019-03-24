import ServiceContext from './serviceContext';
import ServiceMap from './serviceMap';
declare function useServiceManager(map?: ((ServiceMap: any) => void) | ServiceMap): ServiceContext;
export { useServiceManager as default, };

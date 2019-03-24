import ServiceContext from './serviceContext';
import ServiceMap from './serviceMap';

function useServiceManager(map?: ((ServiceMap) => void) | ServiceMap): ServiceContext {
    return new ServiceContext(map);
}

export {
    useServiceManager as default,
};

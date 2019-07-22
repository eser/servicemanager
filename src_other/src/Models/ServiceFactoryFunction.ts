import ContainerInterface from '../Contracts/ContainerInterface'

/**
 * Factory that creates service instances.
 */
type ServiceFactoryFunction<TService> = {(container: ContainerInterface): TService};

export default ServiceFactoryFunction;

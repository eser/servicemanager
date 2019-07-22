import ServiceInterface from '../../Contracts/ServiceInterface'
import ContainerInterface from '../../Contracts/ContainerInterface';
import ServiceFactoryFunction from '../ServiceFactoryFunction'
import ContainerError from '../../Errors/ContainerError'

/**
 * Singleton service that will always create new instances.
 */
export default class FactoryService<TService> implements ServiceInterface<TService> {
  /**
   * @param {ServiceFactoryFunction<TService>} factory Creates new service instances.
   */
  constructor(private readonly factory: ServiceFactoryFunction<TService>) {}

  /**
   * @inheritDoc
   */
  public get(container: ContainerInterface): TService {
    return this.factory(container);
  }
}

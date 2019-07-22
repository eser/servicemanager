import ServiceInterface from '../../Contracts/ServiceInterface'
import ContainerInterface from '../../Contracts/ContainerInterface';
import ServiceFactoryFunction from '../ServiceFactoryFunction'
import ContainerError from '../../Errors/ContainerError'

/**
 * Singleton service that will always return the same instance.
 */
export default class SingletonService<TService> implements ServiceInterface<TService> {
  /**
   * @param {ServiceFactoryFunction<TService>|TService} instance Will initially contain a service factory, but later be replaced with an static instance.
   */
  constructor(private instance: ServiceFactoryFunction<TService>|TService) {

  }

  /**
   * @inheritDoc
   */
  public get(container: ContainerInterface): TService {
    if (this.instance instanceof Function) {
      this.instance = this.instance(container)
    }

    return this.instance
  }
}

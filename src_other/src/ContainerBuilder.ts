import ContainerInterface from './Contracts/ContainerInterface'
import ServiceCollection from './Models/ServiceCollection'
import ContainerError from './Errors/ContainerError'
import ContainerBuilderInterface from './Contracts/ContainerBuilderInterface'
import Container from './Container'
import ServiceInterface from './Contracts/ServiceInterface'
import ServiceFactoryFunction from './Models/ServiceFactoryFunction'
import FactoryService from './Models/Services/FactoryService'
import SingletonService from './Models/Services/SingletonService'

 /**
  * @inheritDoc
  */
export default class ContainerBuilder implements ContainerBuilderInterface {
    /**
     * Collection of services.
     */
    private readonly services: ServiceCollection = {}

    /**
     * @inheritDoc
     */
    public register<TService>(name: string, service: ServiceInterface<TService>): void {
      if (this.contains(name)) {
        throw new ContainerError(`The service "${name}" already exists.`)
      }

      this.services[name] = service
    }

    /**
     * @inheritDoc
     */
    public contains(name: string): boolean {
      return name in this.services
    }

    /**
     * @inheritDoc
     */
    public build(): ContainerInterface {
      return new Container(this.services)
    }

    /**
     * Alias of registering a factory.
     * @param name The name of the service.
     * @param serviceFactory Service factory to create new instances.
     */
    public factory<TService>(name: string, serviceFactory: ServiceFactoryFunction<TService>): void {
      this.register(name, new FactoryService(serviceFactory))
    }

    /**
     * Alias of registering a singleton.
     * @param name The name of the service.
     * @param serviceFactory Service factory to create new instances.
     */
    public singleton<TService>(name: string, serviceFactory: ServiceFactoryFunction<TService>): void {
      this.register(name, new SingletonService(serviceFactory))
    }
}

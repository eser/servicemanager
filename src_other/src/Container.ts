import ServiceCollection from './Models/ServiceCollection'
import ContainerError from './Errors/ContainerError'
import ContainerInterface from './Contracts/ContainerInterface'
import ServiceInterface from './Contracts/ServiceInterface'

/**
 * @inheritDoc
 */
export default class Container implements ContainerInterface {
  /**
   * @param  {ServiceCollection} services Collection of services.
   */
  constructor(private readonly services: ServiceCollection) {}

  /**
   * @inheritDoc
   */
  public contains(name: string): boolean {
    return name in this.services
  }

  /**
   * @inheritDoc
   */
  public get<TService>(name: string): TService {
    if (!this.contains(name)) {
      throw new ContainerError(`Service "${name}" does not exist.`)
    }

    const service: ServiceInterface<TService> = this.services[name]

    return service.get(this)
  }
}

import ContainerInterface from './ContainerInterface'
import ServiceInterface from './ServiceInterface'

/**
 * Registers services and ultimately builds a container.
 */
export default interface ContainerBuilderInterface {
  /**
   * Register a new service in the container.
   * @param name    Name of the service.
   * @param service The service to register.
   * @throws {ContainerError} If the service name already exists.
   */
  register<TService>(name: string, service: ServiceInterface<TService>): void;

  /**
   * Check if a service has already been registered.
   * @param name Name of the service.
   * @return {bool} true if the service already exists, false otherwise.
   */
  contains(name: string): boolean;

  /**
   * Builds a new container.
   * @return {ContainerInterface} A new container.
   */
  build(): ContainerInterface;
}

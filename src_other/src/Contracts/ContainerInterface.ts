/**
 * Immutable service container.
 */
export default interface ContainerInterface {
  /**
   * Check if a service has been registered.
   * @param name Name of the service.
   * @return {bool} true if the service already exists, false otherwise.
   */
  contains(name: string): boolean;

  /**
   * Get a service in the container.
   * @param name Name of the service to get.
   * @return {TService} The service instance.
   * @throws {ContainerError} If the service with the given name does not exist.
   */
  get<TService>(name: string): TService;
}

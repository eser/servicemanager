import ContainerInterface from './ContainerInterface'

/**
 * Defines an object that can create service objects.
 */
export default interface ServiceInterface<TService> {
  /**
   * Get the an instance of the service.
   * @param {ContainerInterface} container The container to use to get dependencies.
   * @return {TService} An instance of the service.
   */
  get(container: ContainerInterface): TService;
}

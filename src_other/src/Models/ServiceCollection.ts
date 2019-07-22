import ServiceInterface from '../Contracts/ServiceInterface'

/**
 * Collection of service factories.
 */
type ServiceCollection = {[name: string]: ServiceInterface<any>}

export default ServiceCollection

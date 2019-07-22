import ServiceLifetime from './serviceLifetime';

interface ServiceTarget {
    target: any;
    lifetime: ServiceLifetime;
    tags: Array<string>;
}

export {
    ServiceTarget as default,
};

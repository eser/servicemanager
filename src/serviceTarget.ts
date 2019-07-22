import ServiceType from './serviceType';

interface ServiceTarget {
    target: any;
    type: ServiceType;
    tags: Array<string>;
}

export {
    ServiceTarget as default,
};

import ServiceLifetime from './serviceLifetime';
import ServiceTarget from './serviceTarget';

function transient(target: any, tags?: Array<string>): ServiceTarget {
    return {
        target: target,
        lifetime: ServiceLifetime.Transient,
        tags: tags || [],
    };
}

export {
    transient as default,
};

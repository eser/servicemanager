import ServiceLifetime from './serviceLifetime';
import ServiceTarget from './serviceTarget';

function singleton(target: any, tags?: Array<string>): ServiceTarget {
    return {
        target: target,
        lifetime: ServiceLifetime.Singleton,
        tags: tags || [],
    };
}

export {
    singleton as default,
};

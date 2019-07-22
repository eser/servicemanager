import ServiceType from '../serviceType';
import ServiceTarget from '../serviceTarget';

function singleton(target: any, tags?: Array<string>): ServiceTarget {
    return {
        target: target,
        type: ServiceType.Singleton,
        tags: tags || [],
    };
}

export {
    singleton as default,
};

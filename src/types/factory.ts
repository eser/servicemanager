import ServiceType from '../serviceType';
import ServiceTarget from '../serviceTarget';

function factory(target: any, tags?: Array<string>): ServiceTarget {
    return {
        target: target,
        type: ServiceType.Factory,
        tags: tags || [],
    };
}

export {
    factory as default,
};

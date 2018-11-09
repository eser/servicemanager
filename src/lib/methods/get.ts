import ServiceContext from '../serviceContext';
import ServiceLifetime from '../serviceLifetime';

function get(context: ServiceContext, dependency: any): any {
    const serviceTarget = context.get(dependency);

    if (serviceTarget === undefined) {
        return undefined;
    }

    if (serviceTarget.lifetime === ServiceLifetime.Singleton ||
        !(serviceTarget.target instanceof Function)) {
        return serviceTarget.target;
    }

    return serviceTarget.target();
}

export {
    get as default,
};

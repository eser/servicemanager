import ServiceContext from '../serviceContext';
import ServiceTarget from '../serviceTarget';

type FilterPredicate = (serviceTarget: ServiceTarget, dependency: any) => boolean;

function filter(context: ServiceContext, predicate: FilterPredicate): Array<string> {
    const result: Array<string> = [];

    for (const [ dependency, serviceDefinition ] of context.entries()) {
        if (predicate(serviceDefinition, dependency)) {
            result.push(dependency);
        }
    }

    return result;
}

export {
    filter as default,
    FilterPredicate,
};

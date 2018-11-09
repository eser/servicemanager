import ServiceContext from '../serviceContext';
import filter from './filter';

function filterByTag(context: ServiceContext, tag: string): Array<string> {
    return filter(context, (serviceTarget) => serviceTarget.tags.indexOf(tag) >= 0);
}

export {
    filterByTag as default,
};

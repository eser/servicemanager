import ServiceContext from '../serviceContext';
import ServiceTarget from '../serviceTarget';
declare type FilterPredicate = (serviceTarget: ServiceTarget, dependency: any) => boolean;
declare function filter(context: ServiceContext, predicate: FilterPredicate): Array<string>;
export { filter as default, FilterPredicate, };

import ServiceMap from '../serviceMap';
import ServiceTarget from '../serviceTarget';
declare type FilterPredicate = (serviceTarget: ServiceTarget, dependency: any) => boolean;
declare function filter(map: ServiceMap, predicate: FilterPredicate): Array<string>;
export { filter as default, FilterPredicate, };

import ServiceContext from '../serviceContext';
import get from './get';

function getRange(context: ServiceContext, ...dependencies: Array<any>): Array<any> {
    return dependencies.map((dependency) => get(context, dependency));
}

export {
    getRange as default,
};

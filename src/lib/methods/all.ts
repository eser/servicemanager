import ServiceContext from '../serviceContext';

function all(context: ServiceContext): Array<string> {
    return Array.from(context.keys());
}

export {
    all as default,
};

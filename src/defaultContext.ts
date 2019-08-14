import ServiceContext from './serviceContext';

let defaultContext: ServiceContext | null = null;

function setDefaultContext(context: ServiceContext) {
    if (defaultContext === null) {
        defaultContext = context;
    }
}

function getDefaultContext(): ServiceContext | null {
    return defaultContext;
}

export {
    setDefaultContext,
    getDefaultContext,
};

import ServiceContext from './serviceContext';
declare function setDefaultContext(context: ServiceContext): void;
declare function getDefaultContext(): ServiceContext | null;
export { setDefaultContext, getDefaultContext, };

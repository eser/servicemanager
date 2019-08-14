import { useServiceManager, createContext, ServiceContext, createMap, singleton, factory, all, ensure, get, getRange, filter, filterByTag } from '..';

describe('resolving', () => {
    test('get (use)', () => {
        createContext((container) => {
            container.set('eser', factory('12345'));
        });

        const services = <ServiceContext>useServiceManager();

        const eser = services.get('eser');

        expect(eser).toEqual('12345');
    });

    test('get', () => {
        const services = createMap((container) => {
            container.set('eser', factory('12345'));
        });

        const eser = get(services, 'eser');

        expect(eser).toEqual('12345');
    });

    test('get from mapping', () => {
        const services = createMap(
            [ 'eser', factory('12345') ],
        );

        const eser = get(services, 'eser');

        expect(eser).toEqual('12345');
    });

    test('get undefined', () => {
        const services = createMap();

        const eser = get(services, undefined);

        expect(eser).toEqual(undefined);
    });

    test('get (context)', () => {
        const services = new ServiceContext((container) => {
            container.set('eser', factory('12345'));
        });

        const eser = services.get('eser');

        expect(eser).toEqual('12345');
    });

    test('get from mapping (context)', () => {
        const services = new ServiceContext(
            [ 'eser', factory('12345') ],
        );

        const eser = services.get('eser');

        expect(eser).toEqual('12345');
    });

    test('get undefined (context)', () => {
        const services = new ServiceContext();

        const eser = services.get(undefined);

        expect(eser).toEqual(undefined);
    });

    test('getRange', () => {
        const services = createMap((container) => {
            container.set('eser', factory('12345'));
            container.set('seyma', singleton('6789'));
        });

        const [ eser, seyma ] = getRange(services, 'eser', 'seyma');

        expect(eser).toEqual('12345');
        expect(seyma).toEqual('6789');
    });

    test('getRange (context)', () => {
        const services = new ServiceContext((container) => {
            container.set('eser', factory('12345'));
            container.set('seyma', singleton('6789'));
        });

        const [ eser, seyma ] = services.getRange('eser', 'seyma');

        expect(eser).toEqual('12345');
        expect(seyma).toEqual('6789');
    });

    test('getRange (use)', () => {
        const services = createContext((container) => {
            container.set('eser', factory('12345'));
            container.set('seyma', singleton('6789'));
        });

        const [ eser, seyma ] = services.getRange('eser', 'seyma');

        expect(eser).toEqual('12345');
        expect(seyma).toEqual('6789');
    });

    test('ensure', async () => {
        const services = createMap((container) => {
            container.set('eser', factory(() => '12345'));
            container.set('seyma', factory(async () => Promise.resolve('6789')));
        });

        const result = await ensure(
            services,
            [ 'eser', 'seyma' ],
            (eser, seyma) => ([ eser, seyma ]),
        );

        expect(result[0]).toEqual('12345');
        expect(result[1]).toEqual('6789');
    });

    test('ensure (context)', async () => {
        const services = new ServiceContext((container) => {
            container.set('eser', factory(() => '12345'));
            container.set('seyma', factory(async () => Promise.resolve('6789')));
        });

        const result = await services.ensure(
            [ 'eser', 'seyma' ],
            (eser, seyma) => ([ eser, seyma ]),
        );

        expect(result[0]).toEqual('12345');
        expect(result[1]).toEqual('6789');
    });

    test('ensure (use)', async () => {
        const services = createContext((container) => {
            container.set('eser', factory(() => '12345'));
            container.set('seyma', factory(async () => Promise.resolve('6789')));
        });

        const result = await services.ensure(
            [ 'eser', 'seyma' ],
            (eser, seyma) => ([ eser, seyma ]),
        );

        expect(result[0]).toEqual('12345');
        expect(result[1]).toEqual('6789');
    });
});

describe('filtering', () => {
    test('all', () => {
        const services = createMap((container) => {
            container.set('eser', factory('12345'));
            container.set('seyma', factory('6789'));
            container.set('kedi', factory('9999'));
        });

        const allOfThem = all(services);

        expect(allOfThem).toEqual([ 'eser', 'seyma', 'kedi' ]);
    });

    test('all (context)', () => {
        const services = new ServiceContext((container) => {
            container.set('eser', factory('12345'));
            container.set('seyma', factory('6789'));
            container.set('kedi', factory('9999'));
        });

        const allOfThem = services.all();

        expect(allOfThem).toEqual([ 'eser', 'seyma', 'kedi' ]);
    });

    test('all (use)', () => {
        const services = createContext((container) => {
            container.set('eser', factory('12345'));
            container.set('seyma', factory('6789'));
            container.set('kedi', factory('9999'));
        });

        const allOfThem = services.all();

        expect(allOfThem).toEqual([ 'eser', 'seyma', 'kedi' ]);
    });

    test('filter', () => {
        const services = createMap((container) => {
            container.set('eser', factory('12345'));
            container.set('seyma', factory('6789'));
            container.set('kedi', factory('9999'));
        });

        const filtered = filter(services, (service, dependency) => dependency.indexOf('s') >= 0);

        expect(filtered).toEqual([ 'eser', 'seyma' ]);
    });

    test('filter (context)', () => {
        const services = new ServiceContext((container) => {
            container.set('eser', factory('12345'));
            container.set('seyma', factory('6789'));
            container.set('kedi', factory('9999'));
        });

        const filtered = services.filter((service, dependency) => dependency.indexOf('s') >= 0);

        expect(filtered).toEqual([ 'eser', 'seyma' ]);
    });

    test('filter (use)', () => {
        const services = createContext((container) => {
            container.set('eser', factory('12345'));
            container.set('seyma', factory('6789'));
            container.set('kedi', factory('9999'));
        });

        const filtered = services.filter((service, dependency) => dependency.indexOf('s') >= 0);

        expect(filtered).toEqual([ 'eser', 'seyma' ]);
    });

    test('filterByTag', () => {
        const services = createMap((container) => {
            container.set('eser', singleton('12345', [ 'human' ]));
            container.set('seyma', singleton('6789', [ 'human' ]));
            container.set('kedi', singleton('9999', [ 'cat' ]));
        });

        const filtered = filterByTag(services, 'cat');

        expect(filtered).toEqual([ 'kedi' ]);
    });

    test('filterByTag (context)', () => {
        const services = new ServiceContext((container) => {
            container.set('eser', singleton('12345', [ 'human' ]));
            container.set('seyma', singleton('6789', [ 'human' ]));
            container.set('kedi', singleton('9999', [ 'cat' ]));
        });

        const filtered = services.filterByTag('cat');

        expect(filtered).toEqual([ 'kedi' ]);
    });

    test('filterByTag (use)', () => {
        const services = createContext((container) => {
            container.set('eser', singleton('12345', [ 'human' ]));
            container.set('seyma', singleton('6789', [ 'human' ]));
            container.set('kedi', singleton('9999', [ 'cat' ]));
        });

        const filtered = services.filterByTag('cat');

        expect(filtered).toEqual([ 'kedi' ]);
    });
});

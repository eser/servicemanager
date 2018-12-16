import { ServiceContext, createMap, singleton, transient, all, ensure, get, getRange, filter, filterByTag, extendMap } from '../';

describe('resolving', () => {
    test('get', () => {
        const services = createMap(container => {
            container.set('eser', transient('12345'));
        });

        const eser = get(services, 'eser');

        expect(eser).toEqual('12345');
    });

    test('get undefined', () => {
        const services = createMap();

        const eser = get(services, undefined);

        expect(eser).toEqual(undefined);
    });

    test('get from extended', () => {
        const services = createMap(container => {
            container.set('eser', transient('12345'));
        });

        const newServices = extendMap(services, container => {
            container.set('seyma', singleton('6789'));
        });

        const eser = get(newServices, 'eser');
        const seyma = get(newServices, 'seyma');

        expect(eser).toEqual('12345');
        expect(seyma).toEqual('6789');
    });

    test('get (context)', () => {
        const services = new ServiceContext(container => {
            container.set('eser', transient('12345'));
        });

        const eser = services.get('eser');

        expect(eser).toEqual('12345');
    });

    test('get from extended (context)', () => {
        const services = new ServiceContext(container => {
            container.set('eser', transient('12345'));
        });

        const newServices = services.extend(container => {
            container.set('seyma', singleton('6789'));
        });

        const eser = newServices.get('eser');
        const seyma = newServices.get('seyma');

        expect(eser).toEqual('12345');
        expect(seyma).toEqual('6789');
    });

    test('getRange', () => {
        const services = createMap(container => {
            container.set('eser', transient('12345'));
            container.set('seyma', singleton('6789'));
        });

        const [ eser, seyma ] = getRange(services, 'eser', 'seyma');

        expect(eser).toEqual('12345');
        expect(seyma).toEqual('6789');
    });

    test('getRange (context)', () => {
        const services = new ServiceContext(container => {
            container.set('eser', transient('12345'));
            container.set('seyma', singleton('6789'));
        });

        const [ eser, seyma ] = services.getRange('eser', 'seyma');

        expect(eser).toEqual('12345');
        expect(seyma).toEqual('6789');
    });

    test('ensure', async () => {
        const services = createMap(container => {
            container.set('eser', transient(() => '12345'));
            container.set('seyma', transient(async () => Promise.resolve('6789')));
        });

        const result = await ensure(
            services,
            [ 'eser', 'seyma' ],
            (eser, seyma) => {
                return [ eser, seyma ];
            }
        );

        expect(result[0]).toEqual('12345');
        expect(result[1]).toEqual('6789');
    });

    test('ensure (context)', async () => {
        const services = new ServiceContext(container => {
            container.set('eser', transient(() => '12345'));
            container.set('seyma', transient(async () => Promise.resolve('6789')));
        });

        const result = await services.ensure(
            [ 'eser', 'seyma' ],
            (eser, seyma) => {
                return [ eser, seyma ];
            }
        );

        expect(result[0]).toEqual('12345');
        expect(result[1]).toEqual('6789');
    });
});

describe('filtering', () => {
    test('all', () => {
        const services = createMap(container => {
            container.set('eser', transient('12345'));
            container.set('seyma', transient('6789'));
            container.set('kedi', transient('9999'));
        });

        const allOfThem = all(services);

        expect(allOfThem).toEqual([ 'eser', 'seyma', 'kedi' ]);
    });

    test('all (context)', () => {
        const services = new ServiceContext(container => {
            container.set('eser', transient('12345'));
            container.set('seyma', transient('6789'));
            container.set('kedi', transient('9999'));
        });

        const allOfThem = services.all();

        expect(allOfThem).toEqual([ 'eser', 'seyma', 'kedi' ]);
    });

    test('filter', () => {
        const services = createMap(container => {
            container.set('eser', transient('12345'));
            container.set('seyma', transient('6789'));
            container.set('kedi', transient('9999'));
        });

        const filtered = filter(services, (service, dependency) => dependency.indexOf('s') >= 0);

        expect(filtered).toEqual([ 'eser', 'seyma' ]);
    });

    test('filter (context)', () => {
        const services = new ServiceContext(container => {
            container.set('eser', transient('12345'));
            container.set('seyma', transient('6789'));
            container.set('kedi', transient('9999'));
        });

        const filtered = services.filter((service, dependency) => dependency.indexOf('s') >= 0);

        expect(filtered).toEqual([ 'eser', 'seyma' ]);
    });

    test('filterByTag', () => {
        const services = createMap(container => {
            container.set('eser', singleton('12345', [ 'human' ]));
            container.set('seyma', singleton('6789', [ 'human' ]));
            container.set('kedi', singleton('9999', [ 'cat' ]));
        });

        const filtered = filterByTag(services, 'cat');

        expect(filtered).toEqual([ 'kedi' ]);
    });

    test('filterByTag (context)', () => {
        const services = new ServiceContext(container => {
            container.set('eser', singleton('12345', [ 'human' ]));
            container.set('seyma', singleton('6789', [ 'human' ]));
            container.set('kedi', singleton('9999', [ 'cat' ]));
        });

        const filtered = services.filterByTag('cat');

        expect(filtered).toEqual([ 'kedi' ]);
    });
});

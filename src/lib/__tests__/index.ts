import { createContext, singleton, transient, all, ensure, get, getRange, filter, filterByTag } from '../';

test('basic get set', () => {
    const services = createContext(container => {
        container.set('eser', transient('12345'));
    });

    const eser = get(services, 'eser');

    expect(eser).toEqual('12345');
});

test('set with tag', () => {
    const services = createContext(container => {
        container.set('eser', singleton('12345', [ 'general' ]));
        container.set('seyma', singleton('6789', [ 'other' ]));
    });

    const generalServices = filterByTag(services, 'general');

    expect(generalServices).toEqual([ 'eser' ]);
});

test('getRange', () => {
    const services = createContext(container => {
        container.set('eser', transient('12345'));
        container.set('seyma', transient('6789'));
    });

    const [ eser, seyma ] = getRange(services, 'eser', 'seyma');

    expect(eser).toEqual('12345');
    expect(seyma).toEqual('6789');
});

test('all', () => {
    const services = createContext(container => {
        container.set('eser', transient('12345'));
        container.set('seyma', transient('6789'));
        container.set('kedi', transient('9999'));
    });

    const allOfThem = all(services);

    expect(allOfThem).toEqual([ 'eser', 'seyma', 'kedi' ]);
});


test('filter', () => {
    const services = createContext(container => {
        container.set('eser', transient('12345'));
        container.set('seyma', transient('6789'));
        container.set('kedi', transient('9999'));
    });

    const filtered = filter(services, (service, dependency) => dependency.indexOf('s') >= 0);

    expect(filtered).toEqual([ 'eser', 'seyma' ]);
});

test('filterByTag', () => {
    const services = createContext(container => {
        container.set('eser', singleton('12345', [ 'human' ]));
        container.set('seyma', singleton('6789', [ 'human' ]));
        container.set('kedi', singleton('9999', [ 'cat' ]));
    });

    const filtered = filterByTag(services, 'cat');

    expect(filtered).toEqual([ 'kedi' ]);
});

test('ensure', async () => {
    const services = createContext(container => {
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

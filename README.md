# 🔌 [ServiceManager](https://github.com/eserozvataf/servicemanager)

[![build status][build-image]][build-url]
[![npm version][npm-image]][npm-url]
[![npm download][npm-download-image]][npm-url]
[![dependencies][dep-image]][dep-url]
[![coverage status][coverage-image]][coverage-url]
[![license][license-image]][license-url]


## Update (July 2022)

DEPRECATED in favor of [hex](https://github.com/eserozvataf/hex).
See https://github.com/eserozvataf/hex for details.


## What is the ServiceManager?

ServiceManager is probably the most basic implementation of dependency injection container for JavaScript.


## Quick start

Execute `npm install servicemanager` or `yarn add servicemanager` to install servicemanager and its dependencies into your project directory.


## Usage

### Basics (Hooks Way)

To register objects to service manager, create a file/module for your service context:

```js
//
// serviceContext.js
//
import { createContext, factory, singleton } from 'servicemanager';

const context = createContext(
    [ 'ResourceManager', factory(DefaultResourceManager) ],
    [ 'CacheManager', factory(CustomCacheManager) ],
    [ 'SessionManager', singleton(mySessionManager) ]
);
```

To get objects back from service manager:

```js
//
// anotherFile.js
//
import useServiceManager from 'servicemanager';

// get default service context
const context = useServiceManager();

// returns a new instance for DefaultResourceManager
const resourceManager = context.get('ResourceManager');

// returns a new instance for CustomCacheManager
const cacheManager = context.get('CacheManager');

// returns the same session manager object that referenced by mySessionManager
const sessionManager = context.get('SessionManager');
```

Alternatively, to get all needed instances at once:

```js
//
// anotherFile2.js
//
import useServiceManager from 'servicemanager';

// get default service context
const context = useServiceManager();

const [ resourceManager, cacheManager, sessionManager ] = context.getRange('ResourceManager', 'CacheManager', 'SessionManager');
```

...Or, to have them in more promise-friendly way:

```js
//
// anotherFile3.js
//
import useServiceManager from 'servicemanager';

// get default service context
const context = useServiceManager();

context.ensure([ 'ResourceManager', 'CacheManager', 'SessionManager' ], (resourceManager, cacheManager, sessionManager) => {
    // awaits promisified generator functions first,
    // then services dependencies as parameters
});
```

*** Note: Service names can be anything including objects, symbols or strings.

### Basics (Functional Way)

To register objects to service manager, create a file/module for your service context:

```js
//
// serviceContext.js
//
import { createContext, factory, singleton } from 'servicemanager';

const context = createContext(
    [ 'ResourceManager', factory(DefaultResourceManager) ],
    [ 'CacheManager', factory(CustomCacheManager) ],
    [ 'SessionManager', singleton(mySessionManager) ]
);

export {
    context as default,
};
```

To get objects back from service manager:

```js
//
// anotherFile.js
//
import { get } from 'servicemanager';
import context from './serviceContext.js';

// returns a new instance for DefaultResourceManager
const resourceManager = get(context, 'ResourceManager');

// returns a new instance for CustomCacheManager
const cacheManager = get(context, 'CacheManager');

// returns the same session manager object that referenced by mySessionManager
const sessionManager = get(context, 'SessionManager');
```

Alternatively, to get all needed instances at once:

```js
//
// anotherFile2.js
//
import { getRange } from 'servicemanager';
import context from './serviceContext.js';

const [ resourceManager, cacheManager, sessionManager ] = getRange(context, 'ResourceManager', 'CacheManager', 'SessionManager');
```

...Or, to have them in more promise-friendly way:

```js
//
// anotherFile3.js
//
import { ensure } from 'servicemanager';
import context from './serviceContext.js';

ensure(context, [ 'ResourceManager', 'CacheManager', 'SessionManager' ], (resourceManager, cacheManager, sessionManager) => {
    // awaits promisified generator functions first,
    // then services dependencies as parameters
});
```

*** Note: Service names can be anything including objects, symbols or strings.

### API

**ServiceContext.prototype methods**

```
constructor(...definitions: ServiceDefinitions)

get(dependency: any): any

getRange(...dependencies: Array<any>): Array<any>

ensure(dependencies: Array<any>, callback: (...services: Array<any>) => any): Promise<any>

all(): Array<string>

filter(predicate: FilterPredicate): Array<string>

filterByTag(tag: string): Array<string>
```


## Mechanics

Factory services call generator/dependency target each time they are requested,
whereas, Singleton services are registered when they are defined.

```js
import createContext, { factory, singleton } from 'servicemanager';

const date1 = Symbol('date1');
const date2 = Symbol('date2');

const context = createContext(
    [ date1, factory(() => new Date()) ],
    [ date2, singleton(new Date()) ]
);

console.log(context.get(date1)); // calls and returns new Date()
console.log(context.get(date1)); // calls and returns new Date() again,
console.log(context.get(date2)); // no calls, returns stored date.
```


## Todo List

See [GitHub Projects](https://github.com/eserozvataf/servicemanager/projects) for more.


## Requirements

* node.js (https://nodejs.org/)


## License

Apache 2.0, for further details, please see [LICENSE](LICENSE) file


## Contributing

See [contributors.md](contributors.md)

It is publicly open for any contribution. Bugfixes, new features and extra modules are welcome.

* To contribute to code: Fork the repo, push your changes to your fork, and submit a pull request.
* To report a bug: If something does not work, please report it using [GitHub Issues](https://github.com/eserozvataf/servicemanager/issues).


## To Support

[Visit my patreon profile at patreon.com/eserozvataf](https://www.patreon.com/eserozvataf)

[build-image]: https://img.shields.io/travis/eserozvataf/servicemanager.svg?style=flat-square
[build-url]: https://travis-ci.org/eserozvataf/servicemanager
[npm-image]: https://img.shields.io/npm/v/servicemanager.svg?style=flat-square
[npm-download-image]: https://img.shields.io/npm/dt/servicemanager.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/servicemanager
[dep-image]: https://img.shields.io/david/eserozvataf/servicemanager.svg?style=flat-square
[dep-url]: https://github.com/eserozvataf/servicemanager
[coverage-image]: https://img.shields.io/codecov/c/github/eserozvataf/servicemanager.svg?style=flat-square
[coverage-url]: https://codecov.io/gh/eserozvataf/servicemanager
[license-image]: https://img.shields.io/npm/l/servicemanager.svg?style=flat-square
[license-url]: https://github.com/eserozvataf/servicemanager/blob/master/LICENSE

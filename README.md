# [ServiceManager](https://github.com/eserozvataf/servicemanager)

[![npm version][npm-image]][npm-url]
[![npm download][download-image]][npm-url]
[![dependencies][dep-image]][dep-url]
[![license][license-image]][license-url]


## What is the ServiceManager?

ServiceManager is probably the most basic implementation of dependency injection container for JavaScript.


## Quick start

Execute `npm install servicemanager` to install servicemanager and its dependencies into your project directory.


## Usage

### Basics

To register objects to service manager, create a file/module for your service context:

```js
//
// serviceContext.js
//
import { createContext, transient, singleton } from 'servicemanager';

const context = createContext(container => {
    container.set('ResourceManager', transient(DefaultResourceManager));
    container.set('CacheManager', transient(CustomCacheManager));
    container.set('SessionManager', singleton(mySessionManager));
});

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

**ServiceManager.prototype methods**

```
constructor(configuration?: (ServiceContext) => void)

get(dependency: any): any

getRange(...dependencies: Array<any>): Array<any>

ensure(dependencies: Array<any>, callback: (...services: Array<any>) => any): Promise<any>

all(): Array<string>

filter(predicate: FilterPredicate): Array<string>

filterByTag(tag: string): Array<string>
```


## Mechanics

Transient services call generator/dependency target each time they are requested,
whereas, Singleton services are registered when they are defined.

```js
import { createContext, transient, singleton, get } from 'servicemanager';

const date1 = Symbol('date1');
const date2 = Symbol('date2');

const context = createContext(container => {
    container.set(date1, transient(() => new Date()));
    container.set(date2, singleton(new Date()));
});

console.log(get(context, date1)); // calls and returns new Date()
console.log(get(context, date1)); // calls and returns new Date() again,
console.log(get(context, date2)); // no calls, returns stored date.
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


[npm-image]: https://img.shields.io/npm/v/servicemanager.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/servicemanager
[download-image]: https://img.shields.io/npm/dt/servicemanager.svg?style=flat-square
[dep-image]: https://img.shields.io/david/eserozvataf/servicemanager.svg?style=flat-square
[dep-url]: https://github.com/eserozvataf/servicemanager
[license-image]: https://img.shields.io/npm/l/servicemanager.svg?style=flat-square
[license-url]: https://github.com/eserozvataf/servicemanager/blob/master/LICENSE

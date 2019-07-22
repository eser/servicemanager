# JavaScript Container

[![Build Status](https://travis-ci.org/Ekman/JS-Service-Container.svg?branch=master)](https://travis-ci.org/Ekman/JS-Service-Container)

A simple and minimalistic and service container for JavaScript and TypeScript.

## Usage

Start with building the container:

```javascript
import {ContainerBuilder, SingletonService} from 'js-service-container';

const builder = new ContainerBuilder()

builder.singleton('class-a', container => {
  return new ClassA()
})

builder.singleton('class-b', container => {
  return new ClassB(container.get('class-a'))
})

builder.factory('class-c', container => {
  return new ClassC(container.get('class-a'), container.get('class-b'))
})

const container = builder.build()
```

Next use the container to load the services. All services are singletons inside the container:

```javascript
const classA = container.get('class-a')
const classB = container.get('class-b')
const classC = container.get('class-c')
```

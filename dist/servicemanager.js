var defaultContext = null;
function setDefaultContext(context) {
    if (defaultContext === null) {
        defaultContext = context;
    }
}
function getDefaultContext() {
    return defaultContext;
}

function useServiceManager() {
    var context = getDefaultContext();
    return context;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function all(map) {
    return Array.from(map.keys());
}

function createMap() {
    var definitions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        definitions[_i] = arguments[_i];
    }
    if (definitions.length === 0 || definitions[0].constructor !== Function) {
        return new Map(definitions);
    }
    var serviceMap = new Map();
    definitions[0](serviceMap);
    return serviceMap;
}

var ServiceType;
(function (ServiceType) {
    ServiceType["Factory"] = "factory";
    ServiceType["Singleton"] = "singleton";
})(ServiceType || (ServiceType = {}));

function get(map, dependency) {
    var serviceTarget = map.get(dependency);
    if (serviceTarget === undefined) {
        return undefined;
    }
    if (serviceTarget.type === ServiceType.Singleton ||
        !(serviceTarget.target instanceof Function)) {
        return serviceTarget.target;
    }
    return serviceTarget.target();
}

function getRange(map) {
    var dependencies = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        dependencies[_i - 1] = arguments[_i];
    }
    return dependencies.map(function (dependency) { return get(map, dependency); });
}

function ensure(map, dependencies, callback) {
    return __awaiter(this, void 0, void 0, function () {
        var serviceResolutions, services, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    serviceResolutions = getRange.apply(void 0, __spread([map], dependencies));
                    return [4, Promise.all(serviceResolutions)];
                case 1:
                    services = _a.sent();
                    return [4, callback.apply(void 0, __spread(services))];
                case 2:
                    result = _a.sent();
                    return [2, result];
            }
        });
    });
}

function filter(map, predicate) {
    var e_1, _a;
    var result = [];
    try {
        for (var _b = __values(map.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), dependency = _d[0], serviceDefinition = _d[1];
            if (predicate(serviceDefinition, dependency)) {
                result.push(dependency);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}

function filterByTag(map, tag) {
    return filter(map, function (serviceTarget) { return serviceTarget.tags.indexOf(tag) >= 0; });
}

var ServiceContext = (function () {
    function ServiceContext() {
        var definitions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            definitions[_i] = arguments[_i];
        }
        this.map = createMap.apply(void 0, __spread(definitions));
    }
    ServiceContext.prototype.get = function (dependency) {
        return get(this.map, dependency);
    };
    ServiceContext.prototype.getRange = function () {
        var dependencies = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            dependencies[_i] = arguments[_i];
        }
        return getRange.apply(void 0, __spread([this.map], dependencies));
    };
    ServiceContext.prototype.ensure = function (dependencies, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, ensure(this.map, dependencies, callback)];
                    case 1:
                        result = _a.sent();
                        return [2, result];
                }
            });
        });
    };
    ServiceContext.prototype.all = function () {
        return all(this.map);
    };
    ServiceContext.prototype.filter = function (predicate) {
        return filter(this.map, predicate);
    };
    ServiceContext.prototype.filterByTag = function (tag) {
        return filterByTag(this.map, tag);
    };
    return ServiceContext;
}());

function createContext() {
    var definitions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        definitions[_i] = arguments[_i];
    }
    var context = new (ServiceContext.bind.apply(ServiceContext, __spread([void 0], definitions)))();
    setDefaultContext(context);
    return context;
}

function singleton(target, tags) {
    return {
        target: target,
        type: ServiceType.Singleton,
        tags: tags || [],
    };
}

function factory(target, tags) {
    return {
        target: target,
        type: ServiceType.Factory,
        tags: tags || [],
    };
}

export default useServiceManager;
export { ServiceContext, ServiceType, all, createContext, createMap, ensure, factory, filter, filterByTag, get, getRange, singleton, useServiceManager };

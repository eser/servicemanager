"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = createMap;
//# sourceMappingURL=createMap.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createMap(configuration) {
    var serviceMap = new Map();
    if (configuration !== undefined) {
        configuration(serviceMap);
    }
    return serviceMap;
}
exports.default = createMap;
//# sourceMappingURL=createMap.js.map
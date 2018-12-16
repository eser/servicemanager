"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extendMap(map, configuration) {
    var newMap = new Map(map);
    configuration(newMap);
    return newMap;
}
exports.default = extendMap;
//# sourceMappingURL=extendMap.js.map
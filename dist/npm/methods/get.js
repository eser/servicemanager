"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var serviceType_1 = tslib_1.__importDefault(require("../serviceType"));
function get(map, dependency) {
    var serviceTarget = map.get(dependency);
    if (serviceTarget === undefined) {
        return undefined;
    }
    if (serviceTarget.type === serviceType_1.default.Singleton ||
        !(serviceTarget.target instanceof Function)) {
        return serviceTarget.target;
    }
    return serviceTarget.target();
}
exports.default = get;
//# sourceMappingURL=get.js.map
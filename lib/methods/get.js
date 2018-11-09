"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var serviceLifetime_1 = tslib_1.__importDefault(require("../serviceLifetime"));
function get(context, dependency) {
    var serviceTarget = context.get(dependency);
    if (serviceTarget === undefined) {
        return undefined;
    }
    if (serviceTarget.lifetime === serviceLifetime_1.default.Singleton ||
        !(serviceTarget.target instanceof Function)) {
        return serviceTarget.target;
    }
    return serviceTarget.target();
}
exports.default = get;
//# sourceMappingURL=get.js.map
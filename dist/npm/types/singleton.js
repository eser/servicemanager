"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var serviceType_1 = tslib_1.__importDefault(require("../serviceType"));
function singleton(target, tags) {
    return {
        target: target,
        type: serviceType_1.default.Singleton,
        tags: tags || [],
    };
}
exports.default = singleton;
//# sourceMappingURL=singleton.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var serviceLifetime_1 = tslib_1.__importDefault(require("./serviceLifetime"));
function singleton(target, tags) {
    return {
        target: target,
        lifetime: serviceLifetime_1.default.Singleton,
        tags: tags || [],
    };
}
exports.default = singleton;
//# sourceMappingURL=singleton.js.map
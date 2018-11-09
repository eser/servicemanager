"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var serviceLifetime_1 = tslib_1.__importDefault(require("./serviceLifetime"));
function transient(target, tags) {
    return {
        target: target,
        lifetime: serviceLifetime_1.default.Transient,
        tags: tags || [],
    };
}
exports.default = transient;
//# sourceMappingURL=transient.js.map
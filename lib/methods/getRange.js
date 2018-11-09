"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var get_1 = tslib_1.__importDefault(require("./get"));
function getRange(context) {
    var dependencies = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        dependencies[_i - 1] = arguments[_i];
    }
    return dependencies.map(function (dependency) { return get_1.default(context, dependency); });
}
exports.default = getRange;
//# sourceMappingURL=getRange.js.map
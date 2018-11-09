"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function filter(context, predicate) {
    var e_1, _a;
    var result = [];
    try {
        for (var _b = tslib_1.__values(context.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = tslib_1.__read(_c.value, 2), dependency = _d[0], serviceDefinition = _d[1];
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
exports.default = filter;
//# sourceMappingURL=filter.js.map
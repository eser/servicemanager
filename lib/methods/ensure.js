"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var getRange_1 = tslib_1.__importDefault(require("./getRange"));
function ensure(context, dependencies, callback) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var serviceResolutions, services, result;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    serviceResolutions = getRange_1.default.apply(void 0, tslib_1.__spread([context], dependencies));
                    return [4, Promise.all(serviceResolutions)];
                case 1:
                    services = _a.sent();
                    return [4, callback.apply(void 0, tslib_1.__spread(services))];
                case 2:
                    result = _a.sent();
                    return [2, result];
            }
        });
    });
}
exports.default = ensure;
//# sourceMappingURL=ensure.js.map
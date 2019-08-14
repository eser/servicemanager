"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var all_1 = tslib_1.__importDefault(require("./methods/all"));
var createMap_1 = tslib_1.__importDefault(require("./methods/createMap"));
var ensure_1 = tslib_1.__importDefault(require("./methods/ensure"));
var filter_1 = tslib_1.__importDefault(require("./methods/filter"));
var filterByTag_1 = tslib_1.__importDefault(require("./methods/filterByTag"));
var get_1 = tslib_1.__importDefault(require("./methods/get"));
var getRange_1 = tslib_1.__importDefault(require("./methods/getRange"));
var ServiceContext = (function () {
    function ServiceContext() {
        var definitions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            definitions[_i] = arguments[_i];
        }
        this.map = createMap_1.default.apply(void 0, tslib_1.__spread(definitions));
    }
    ServiceContext.prototype.get = function (dependency) {
        return get_1.default(this.map, dependency);
    };
    ServiceContext.prototype.getRange = function () {
        var dependencies = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            dependencies[_i] = arguments[_i];
        }
        return getRange_1.default.apply(void 0, tslib_1.__spread([this.map], dependencies));
    };
    ServiceContext.prototype.ensure = function (dependencies, callback) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, ensure_1.default(this.map, dependencies, callback)];
                    case 1:
                        result = _a.sent();
                        return [2, result];
                }
            });
        });
    };
    ServiceContext.prototype.all = function () {
        return all_1.default(this.map);
    };
    ServiceContext.prototype.filter = function (predicate) {
        return filter_1.default(this.map, predicate);
    };
    ServiceContext.prototype.filterByTag = function (tag) {
        return filterByTag_1.default(this.map, tag);
    };
    return ServiceContext;
}());
exports.default = ServiceContext;
//# sourceMappingURL=serviceContext.js.map
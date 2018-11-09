"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var all_1 = tslib_1.__importDefault(require("./methods/all"));
var createContext_1 = tslib_1.__importDefault(require("./methods/createContext"));
var ensure_1 = tslib_1.__importDefault(require("./methods/ensure"));
var filter_1 = tslib_1.__importDefault(require("./methods/filter"));
var filterByTag_1 = tslib_1.__importDefault(require("./methods/filterByTag"));
var get_1 = tslib_1.__importDefault(require("./methods/get"));
var getRange_1 = tslib_1.__importDefault(require("./methods/getRange"));
var ServiceManager = (function () {
    function ServiceManager(configuration) {
        this.context = createContext_1.default(configuration);
    }
    ServiceManager.prototype.get = function (dependency) {
        return get_1.default(this.context, dependency);
    };
    ServiceManager.prototype.getRange = function () {
        var dependencies = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            dependencies[_i] = arguments[_i];
        }
        return getRange_1.default.apply(void 0, tslib_1.__spread([this.context], dependencies));
    };
    ServiceManager.prototype.ensure = function (dependencies, callback) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, ensure_1.default(this.context, dependencies, callback)];
                    case 1:
                        result = _a.sent();
                        return [2, result];
                }
            });
        });
    };
    ServiceManager.prototype.all = function () {
        return all_1.default(this.context);
    };
    ServiceManager.prototype.filter = function (predicate) {
        return filter_1.default(this.context, predicate);
    };
    ServiceManager.prototype.filterByTag = function (tag) {
        return filterByTag_1.default(this.context, tag);
    };
    return ServiceManager;
}());
exports.default = ServiceManager;
//# sourceMappingURL=serviceManager.js.map
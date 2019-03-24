"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var serviceContext_1 = tslib_1.__importDefault(require("./serviceContext"));
function useServiceManager(map) {
    return new serviceContext_1.default(map);
}
exports.default = useServiceManager;
//# sourceMappingURL=useServiceManager.js.map
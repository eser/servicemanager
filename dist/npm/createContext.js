"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var serviceContext_1 = tslib_1.__importDefault(require("./serviceContext"));
var defaultContext_1 = require("./defaultContext");
function createContext() {
    var definitions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        definitions[_i] = arguments[_i];
    }
    var context = new (serviceContext_1.default.bind.apply(serviceContext_1.default, tslib_1.__spread([void 0], definitions)))();
    defaultContext_1.setDefaultContext(context);
    return context;
}
exports.default = createContext;
//# sourceMappingURL=createContext.js.map
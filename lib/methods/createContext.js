"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createContext(configuration) {
    var serviceContext = new Map();
    if (configuration !== undefined) {
        configuration(serviceContext);
    }
    return serviceContext;
}
exports.default = createContext;
//# sourceMappingURL=createContext.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var filter_1 = tslib_1.__importDefault(require("./filter"));
function filterByTag(context, tag) {
    return filter_1.default(context, function (serviceTarget) { return serviceTarget.tags.indexOf(tag) >= 0; });
}
exports.default = filterByTag;
//# sourceMappingURL=filterByTag.js.map
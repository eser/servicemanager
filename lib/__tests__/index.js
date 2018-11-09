"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var __1 = require("../");
test('basic get set', function () {
    var services = __1.createContext(function (container) {
        container.set('eser', __1.transient('12345'));
    });
    var eser = __1.get(services, 'eser');
    expect(eser).toEqual('12345');
});
test('set with tag', function () {
    var services = __1.createContext(function (container) {
        container.set('eser', __1.singleton('12345', ['general']));
        container.set('seyma', __1.singleton('6789', ['other']));
    });
    var generalServices = __1.filterByTag(services, 'general');
    expect(generalServices).toEqual(['eser']);
});
test('getRange', function () {
    var services = __1.createContext(function (container) {
        container.set('eser', __1.transient('12345'));
        container.set('seyma', __1.transient('6789'));
    });
    var _a = tslib_1.__read(__1.getRange(services, 'eser', 'seyma'), 2), eser = _a[0], seyma = _a[1];
    expect(eser).toEqual('12345');
    expect(seyma).toEqual('6789');
});
test('all', function () {
    var services = __1.createContext(function (container) {
        container.set('eser', __1.transient('12345'));
        container.set('seyma', __1.transient('6789'));
        container.set('kedi', __1.transient('9999'));
    });
    var allOfThem = __1.all(services);
    expect(allOfThem).toEqual(['eser', 'seyma', 'kedi']);
});
test('filter', function () {
    var services = __1.createContext(function (container) {
        container.set('eser', __1.transient('12345'));
        container.set('seyma', __1.transient('6789'));
        container.set('kedi', __1.transient('9999'));
    });
    var filtered = __1.filter(services, function (service, dependency) { return dependency.indexOf('s') >= 0; });
    expect(filtered).toEqual(['eser', 'seyma']);
});
test('filterByTag', function () {
    var services = __1.createContext(function (container) {
        container.set('eser', __1.singleton('12345', ['human']));
        container.set('seyma', __1.singleton('6789', ['human']));
        container.set('kedi', __1.singleton('9999', ['cat']));
    });
    var filtered = __1.filterByTag(services, 'cat');
    expect(filtered).toEqual(['kedi']);
});
test('ensure', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var services, result;
    var _this = this;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                services = __1.createContext(function (container) {
                    container.set('eser', __1.transient(function () { return '12345'; }));
                    container.set('seyma', __1.transient(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                        return [2, Promise.resolve('6789')];
                    }); }); }));
                });
                return [4, __1.ensure(services, ['eser', 'seyma'], function (eser, seyma) {
                        return [eser, seyma];
                    })];
            case 1:
                result = _a.sent();
                expect(result[0]).toEqual('12345');
                expect(result[1]).toEqual('6789');
                return [2];
        }
    });
}); });
//# sourceMappingURL=index.js.map
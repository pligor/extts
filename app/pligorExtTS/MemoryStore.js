/**
 * Created by pligor (aka Georgios Pligoropoulos) on 27/5/2016.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="Store.ts"/>
var MemoryStore = (function (_super) {
    __extends(MemoryStore, _super);
    function MemoryStore(alias, fields, items) {
        if (items === void 0) { items = []; }
        _super.call(this, alias);
        this.fields = fields;
        this.items = items;
    }
    MemoryStore.prototype.toExtJS = function () {
        return {
            extend: 'Ext.data.Store',
            alias: this.alias,
            fields: this.fields,
            data: {
                items: this.items
            },
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json',
                    rootProperty: MemoryStore.rootProperty
                }
            }
        };
    };
    MemoryStore.rootProperty = "items";
    return MemoryStore;
}(Store));
//# sourceMappingURL=MemoryStore.js.map
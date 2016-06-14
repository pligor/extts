var Individual = (function () {
    function Individual(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    return Individual;
}());
var MemoryStore = (function () {
    function MemoryStore(alias, fields, items) {
        this.alias = alias;
        this.fields = fields;
        this.items = items;
    }
    MemoryStore.prototype.toExtJS = function () {
        return {
            extend: 'Ext.data.Store',
            alias: 'store.' + this.alias,
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
}());
//# sourceMappingURL=tsc.js.map
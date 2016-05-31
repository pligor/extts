///<reference path="../../declarations/ext-6.0.2-classic.d.ts"/>
///<reference path="PersonnelStore.ts"/>
Ext.define('extTestTs.store.Personnel', {
    extend: 'Ext.data.Store',
    alias: PersonnelStore.alias,
    fields: PersonnelStore.fields,
    data: {
        items: PersonnelStore.items
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: PersonnelStore.rootProperty
        }
    }
});
//# sourceMappingURL=Personnel.js.map
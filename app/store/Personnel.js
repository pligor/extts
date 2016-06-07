///<reference path="../../declarations/ext-6.0.2-classic.d.ts"/>
///<reference path="Individual.ts"/>
///<reference path="../pligorExtTS/MemoryStore.ts"/>
var memoryStore = new MemoryStore("personnel", [
    'name', 'email', 'phone'
], [
    new Individual("Batman", "etsigoustaro@thefirm.com", "+306969696969"),
    new Individual("Jean Luc", "jeanluc.picard@enterprise.com", "555-111-1111"),
    new Individual("Worf", "worf.moghsson@enterprise.com", "+30 696 969 6969"),
    new Individual("Deanna", "mr.data@enterprise.com", "+30 6969696969"),
    new Individual("Data", "deanna.troi@enterprise.com", "+30-6969696969"),
]);
Ext.define('extTestTs.store.Personnel', {
    extend: 'Ext.data.Store',
    alias: memoryStore.alias,
    fields: memoryStore.fields,
    data: {
        items: memoryStore.items
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: MemoryStore.rootProperty
        }
    }
});
//# sourceMappingURL=Personnel.js.map
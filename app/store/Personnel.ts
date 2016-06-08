///<reference path="../../declarations/ext-6.0.2-classic.d.ts"/>

///<reference path="Individual.ts"/>
///<reference path="../pligorExtTS/MemoryStore.ts"/>

var memoryStore = new MemoryStore<Individual>("personnel", [
    'name', 'email', 'phone'
], [
    new Individual("Batman", "etsigoustaro@thefirm.com", "+306969696969"),
    new Individual("Jean Luc", "jeanluc.picard@enterprise.com", "555-111-1111"),
    new Individual("Worf", "worf.moghsson@enterprise.com", "+30 696 969 6969"),
    new Individual("Deanna", "mr.data@enterprise.com", "+30 6969696969"),
    new Individual("Data", "deanna.troi@enterprise.com", "+30-6969696969"),
])

//memoryStore.toExtJS()

Ext.define('extTestTs.store.Personnel', function (Personnel) {
    return memoryStore.toExtJS()

    return {}
});


/*(function(){
 //return JSON.stringify(memoryStore.toExtJS())  //fails

 //return Ext.Object.merge({},{})    //fails

 /!*return {                          //simple and works
 constructor: function () {
 this.callParent(arguments)
 }
 }*!/

 return function() {

 }
 })()*/


/*extend: 'Ext.data.Store',

 constructor: function () {
 console.log(memoryStore.toExtJS())

 this.callParent(arguments)
 },

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
 }*/


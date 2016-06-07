/**
 * Created by pligor (aka Georgios Pligoropoulos) on 27/5/2016.
 */

///<reference path="Store.ts"/>

class MemoryStore<T> extends Store {
    static rootProperty = "items"

    fields:string[];

    items:Array<T>;

    constructor(alias:string, fields:string[], items:Array<T> = []) {
        super(alias)

        this.fields = fields

        this.items = items
    }

    toExtJS() {
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
        }
    }
}

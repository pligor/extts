/**
 * Created by gpligoropoulos on 14/06/2016.
 */


class MemoryStore<T> {
    alias: string
    
    fields: string[]
    
    items: T[]

    static rootProperty = "items"
    
    constructor(alias: string, fields: string[], items: T[]) {
        this.alias = alias
        
        this.fields = fields
        
        this.items = items
    }
    
    toExtJS() {
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
        }
    }
}
/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('extTestTs.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    init: function () {
        var me = this

        //me._bindInputWithItsStack()

        //me._bindOutputWithItsStack()

        me._bindInputWithOutput()
    },

    _bindInputWithOutput: function () {
        var me = this

        me.getViewModel().bind("{inputNum}", function (num) {
            if(num) {
                if(num % 2) {
                    setTimeout(function() {
                        me.getViewModel().set("outputNum", num * 100)
                    }, 1000)
                } else {
                    me.getViewModel().set("outputNum", num * 100)
                }
            } else {
                console.log("input num was null")
            }
        })
    },

    _count: 0,

    onCallbackHellButtonClick: function (button, event, eventOptions) {
        var me = this

        //var array = [Math.random(), Math.random(), Math.random()]
        /*for (var ind in array) {
            console.log(array[ind])

            me.getViewModel().set("inputNum", array[ind])
        }
         me.getViewModel().set("inputNumbers", array)*/

        me._count += 1

        me.getViewModel().set("inputNum", me._count)
    },

    /**
     * @private
     */
    _clearOutputNums: function () {
        var me = this

        me.getViewModel().set("outputNumbers", [])
    },

   /* _bindOutputWithItsStack: function () {
        var me = this

        me.getViewModel().bind("{outputNum}", function (num) {
            if(num) {
                var nums = me.getViewModel().get("outputNumbers")

                nums.push(num)

                me.getViewModel().set("outputNumbers", nums)

                console.log("output numbers")
                console.log(me.getViewModel().get("outputNumbers"))
            } else {
                console.log("output num was null")
            }
        })
    },*/

    /*_bindInputWithItsStack: function () {
     var me = this

     me.getViewModel().bind("{inputNum}", function (num) {
     if(num) {
     var nums = me.getViewModel().get("inputNumbers")

     nums.push(num)

     me.getViewModel().set("inputNumbers", nums)

     console.log("input numbers")
     console.log(me.getViewModel().get("inputNumbers"))
     } else {
     //console.log("output num was null")
     }
     })
     },*/
});

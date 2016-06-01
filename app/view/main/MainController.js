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

        me._bindOutputWithItsStack()

        me._bindInputWithOutput()
    },

    _bindOutputWithItsStack: function () {
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
    },

    _bindInputWithOutput: function () {
        var me = this

        me.getViewModel().bind("{inputNum}", function (num) {
            if(num) {
                console.log("inputNum: " + num)
                //TODO make slow and fast
                me.getViewModel().set("outputNum", num * 100)
            } else {
                console.log("input num was null")
            }
        })
    },

    onCallbackHellButtonClick: function (button, event, eventOptions) {
        var me = this

        me._clearOutputNums()

        var array = [Math.random(), Math.random(), Math.random()]

        for (var ind in array) {
            console.log(array[ind])

            me.getViewModel().set("inputNum", array[ind])
        }

        me.getViewModel().set("inputNumbers", array)
    },

    /**
     * @private
     */
    _clearOutputNums: function () {
        var me = this

        me.getViewModel().set("outputNumbers", [])
    },
});

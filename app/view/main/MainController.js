/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
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

    onCallbackHellButtonClick: function (button, event, eventOptions) {
        var me = this

        var array = [Math.random(), Math.random(), Math.random()]

        for(var ind in array) {
            me.getViewModel().set("inputNum", array[ind])
        }

        me.getViewModel().set("inputNumbers", array)
    },
});

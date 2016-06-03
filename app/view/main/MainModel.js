/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('extTestTs.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'extTestTs',

        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

        inputNum: null,

        outputNum: null,

        inputNumbers: [],

        outputNumbers: [],
    },

    formulas: {
        outputNumsString: {
            bind: "{outputNumbers}",

            get: function (nums) {
                console.log("outputNumsString")

                if (Ext.isArray(nums) && !Ext.isEmpty(nums)) {
                    return nums.join(" | ")
                } else {
                    return "empty"
                }
            },
        },

        outputNumbers: {
            bind: "{outputNum}",

            get: function (num) {
                if (num) {
                    var viewModel = this

                    return Ext.Array.clone(
                        Ext.Array.push(viewModel.get("outputNumbers"), num)
                    )
                } else {
                    return []
                }
            },
        },

        inputNumbers: {
            bind: "{inputNum}",

            get: function (num) {
                if (num) {
                    var viewModel = this

                    return Ext.Array.clone(
                        Ext.Array.push(viewModel.get("inputNumbers"), num)
                    )
                } else {
                    return []
                }
            },
        },

        inputNumsString: {
            bind: "{inputNumbers}",

            get: function (nums) {
                console.log("inputNumsString")

                if (Ext.isArray(nums) && !Ext.isEmpty(nums)) {
                    //console.log("inside formula")
                    //console.log(nums)

                    return nums.join(" | ")
                } else {
                    return "empty"
                }
            },
        },
    },
});

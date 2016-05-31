/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('extTestTs.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.button.Button',
        'Ext.layout.container.boxOverflow.None',
        'Ext.panel.Panel',
        'Ext.plugin.Responsive',
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'extTestTs.view.main.List',
        'extTestTs.view.main.MainController',
        'extTestTs.view.main.MainModel'
    ],

    controller: {
        type: 'main',
    },

    viewModel: {
        type: 'main',
    },

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',

        xtype: 'panel',

        defaults: {
            margin: 10,
        },

        items: [{
            xtype: 'button',
            text: "press me to give you numbers and test callback hell",
            listeners: {
                click: "onCallbackHellButtonClick",
            },
        }, {
            bind: {
                html: "inputs: {inputNumbers}",
            }
        }, {
            html: "If negative you get slow response, if positive you get fast"
        }, {
            bind: {
                html: "last output: {outputNumber}",
            },
        }],

        bind: {
            //html: '{loremIpsum}'
        }
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});

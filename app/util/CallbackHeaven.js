/**
 * Created by gpligoropoulos on 10/10/2015.
 */
Ext.define('extTestTs.util.CallbackHeaven', {
    singleton: true,

    //an example of arg converter:
    /*argConverter: function (args) {
     return args.pop()
     }*/

    initBindFuncs: function () {
        return {
            funcs: [],
            running: false,
        }
    },

    //an example from regular function to function with callback as first param
    /*
     function funcModified(callback, x:number) {    //modified
     if (x > 0) {
     setTimeout(function () {
     console.log(x * 10)
     callback()
     }, 1200)
     } else {
     console.log(x * -10)
     callback()
     }
     }
     */
    /*
     function funcOriginal(x:number) {    //normal
     if (x > 0) {
     setTimeout(function () {
     console.log(x * 10)
     }, 1200)
     } else {
     console.log(x * -10)
     }
     }
     */

    /**
     * sample usage:
     * callbackHeavenWrapper(funcModified, bindFuncs, argConv, this, x)
     *
     * @param funcWithCallbacksInside
     * @param myBindFuncs
     * @param myargconv
     * @param scope
     * and more arguments dynamically
     */
    callbackHeavenWrapper: function (funcWithCallbacksInside, myBindFuncs, myargconv, scope) {
        var me = this

        myBindFuncs.funcs.push(
            me.funcWrapper.apply(scope, [funcWithCallbacksInside, myargconv].concat(Array.prototype.slice.call(arguments, 4)))
        )

        if (myBindFuncs.running) {
            //no need to requeue
        } else {
            me.queueWithState(myBindFuncs)
        }
    },

    queueWithState: function (bindFuncs, scope) {
        var curScope = scope || this;

        (function next() {
            if (bindFuncs.funcs.length > 0) {
                bindFuncs.running = true

                var f = bindFuncs.funcs.shift();
                f.apply(curScope, [next].concat(Array.prototype.slice.call(arguments, 0)));
            } else {
                bindFuncs.running = false
            }
        })()
    },

    queue: function (funcs, scope) {
        var curScope = scope || this

            (function next() {
                if (funcs.length > 0) {
                    var f = funcs.shift()

                    f.apply(curScope, [next].concat(Array.prototype.slice.call(arguments, 0)));
                } else {
                    //nop
                }
            })();
    },

    /**
     * @param funcWithCallbackFirstParam the modified callback function that includes the callback as the first parameter
     * @param argConverter function that converts the array arguments into what the original function was expecting
     * @returns {Function}
     */
    funcWrapper: function (funcWithCallbackFirstParam, argConverter) {
        var theArgs = Array.prototype.slice.call(arguments, 2)

        return function (callback) {
            funcWithCallbackFirstParam(callback, argConverter(theArgs))
        }
    },
});
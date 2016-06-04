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

    /*
     function
     */

    //an example from regular function to function with callback as first param
    /*
     function funcModified(scope, callback) {    //modified
     return function (x:number) {
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
            me.funcWrapper.apply(scope, [scope, funcWithCallbacksInside, myargconv].concat(Array.prototype.slice.call(arguments, 4)))
        )

        //console.log("myBindFuncs.running")
        //console.log(myBindFuncs.running)

        if (myBindFuncs.running) {
            //console.log("no need to requeue")
        } else {
            me.queueWithState(myBindFuncs, scope)
        }
    },

    queueWithState: function (bindFuncs, scope) {
        var curScope = scope;

        (function next() {
            //console.log("in next")

            if (bindFuncs.funcs.length > 0) {
                bindFuncs.running = true

                var f = bindFuncs.funcs.shift()

                var argArray = [next].concat(Array.prototype.slice.call(arguments, 0))

                //debugger;

                //console.log("argArray")
                //console.log(argArray)

                f.apply(curScope, argArray);
            } else {
                bindFuncs.running = false
            }
        })()
    },

    /**
     * @param scope
     * @param funcWithCallbackFirstParam the modified callback function that includes the callback as the first parameter
     * @param argConverter function that converts the array arguments into what the original function was expecting
     * @returns {Function}
     */
    funcWrapper: function (scope, funcWithCallbackFirstParam, argConverter) {
        var theArgs = Array.prototype.slice.call(arguments, 3)

        return function (callback) {
            funcWithCallbackFirstParam(scope, callback)(argConverter(theArgs))
        }
    },

    /*queue: function (funcs, scope) {
     var curScope = scope || this

     (function next() {
     if (funcs.length > 0) {
     var f = funcs.shift()

     f.apply(curScope, [next].concat(Array.prototype.slice.call(arguments, 0)));
     } else {
     //nop
     }
     })();
     },*/
});
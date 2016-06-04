/**
 * Created by student on 27/5/2016.
 */
var queue = function (funcs, scope) {
    var curScope = scope || this(function next() {
        if (funcs.length > 0) {
            var f = funcs.shift();
            f.apply(curScope, [next].concat(Array.prototype.slice.call(arguments, 0)));
        }
        else {
        }
    })();
};
var obj = {
    value: null
};
var funcs = [
    function (callback) {
        var self = this;
        setTimeout(function () {
            self.value = 10;
            callback(20);
        }, 200);
    },
    function (callback, add) {
        console.log(this.value + add);
        callback();
    },
    function () {
        console.log(obj.value);
    }
];
////////////////////////
function funcWrapper(func, argConverter) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var theArgs = Array.prototype.slice.call(arguments, 2);
    return function (callback) {
        func(callback)(argConverter(theArgs));
    };
}
var bindFuncs = {
    funcs: [],
    running: false,
};
var queueWithState = function (bindFuncs, scope) {
    var curScope = scope; //do not remove the semicolon
    (function next() {
        if (bindFuncs.funcs.length > 0) {
            bindFuncs.running = true;
            var f = bindFuncs.funcs.shift();
            f.apply(curScope, [next].concat(Array.prototype.slice.call(arguments, 0)));
        }
        else {
            bindFuncs.running = false;
        }
    })();
};
function argConv(args) {
    return args.pop();
}
var callbackHeavenWrapper = function (funcWithCallbacksInside, myBindFuncs, myargconv, scope) {
    var args = [];
    for (var _i = 4; _i < arguments.length; _i++) {
        args[_i - 4] = arguments[_i];
    }
    myBindFuncs.funcs.push(funcWrapper.apply(scope, [funcWithCallbacksInside, myargconv].concat(Array.prototype.slice.call(arguments, 4))));
    if (myBindFuncs.running) {
    }
    else {
        queueWithState(myBindFuncs, scope);
    }
};
function funcOriginal(x) {
    if (x > 0) {
        setTimeout(function () {
            console.log(x * 10);
        }, 1200);
    }
    else {
        console.log(x * -10);
    }
}
function funcModified(callback) {
    return function (x) {
        if (x > 0) {
            setTimeout(function () {
                console.log(x * 10);
                callback();
            }, 1200);
        }
        else {
            console.log(x * -10);
            callback();
        }
    };
}
function wrapper(x) {
    callbackHeavenWrapper(funcModified, bindFuncs, argConv, this, x);
}
wrapper(1);
wrapper(-2);
wrapper(3);
wrapper(-4);
//# sourceMappingURL=CallbackHell.js.map
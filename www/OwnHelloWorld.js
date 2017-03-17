var exec = require('cordova/exec');

exports.hello = function(arg0, success, error) {
    exec(success, error, "OwnHelloWorld", "hello", [arg0]);
};

exports.hellojs = function(arg0, success, error) {
    if (arg0 && typeof(arg0) === 'string' && arg0.length > 0) {
        success(arg0);
    } else {
        error('Empty message!');
    }
};

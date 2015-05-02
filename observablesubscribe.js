var observable = require("data/observable");

var propChangeEventName = (observable.knownEvents) ? observable.knownEvents.propertyChange : observable.Observable.propertyChangeEvent;
var subsPropName = "subscribedProperties";

observable.Observable.prototype.subscribe = function(propName, callback, thisArg) {
    this[subsPropName] = this[subsPropName] || [];
    if (this[subsPropName].indexOf(propName) == -1) { //subscribe only if not already subscribed
        this[subsPropName].push(propName);
        this.addEventListener(propChangeEventName, function(changeObj){
            if (changeObj.propertyName == propName && (this[subsPropName].indexOf(propName) > -1)) {
                if (thisArg) {
                    callback.apply(thisArg, [changeObj]);
                }
                else {
                    callback(changeObj);
                }
            }
        }, thisArg);
    }
};

observable.Observable.prototype.unsubscribe = function(propName) {
    if (typeof(this[subsPropName]) != "object") return;
    var idx = this[subsPropName].indexOf(propName);
    if (idx > -1) {
        this[subsPropName].splice(idx, 1);
    }
};

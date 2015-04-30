var observable = require("data/observable");

var propChangeEventName = (observable.knownEvents) ? observable.knownEvents.propertyChange : observable.Observable.propertyChangeEvent;

observable.Observable.prototype.subscribe = function(propName, callback, thisArg) {
	
	this.addEventListener(propChangeEventName, function(changeObj){
		if (changeObj.propertyName == propName) {
			if (thisArg) {
				callback.apply(thisArg, [changeObj]);
			}
			else {
				callback(changeObj);
			}
		}
	}, thisArg);
};
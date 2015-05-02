# nativescript-observable-subscribe

NativeScript module that adds subscribe support to observables. Listening for observable changes can always be done using standard addEventListener technique that can be found in the NativeScript docs, but this is a much more convenient subscription method that keeps your code neat by isolating handlers for individual properties.
As NativeScript is constantly evolving, a subscribe solution might be implemented in the core project as a tns module making this module obsolete; so one should keep an eye out for that.

## Installation

Run `npm install nativescript-observable-subscribe --save` from your project's `app` directory:

```
.
├── app  <------------------------------ run npm install from here
│   ├── app.css
│   ├── app.js
│   ├── bootstrap.js
│   ├── main-page.js
│   ├── main-page.xml
│   ├── node_modules
│   │   └── nativescript-observable-subscribe <-- The install will place the module's code here
│   │       └── ...
│   └── package.json <----------------- The install will register “nativescript-observable-subscribe” as a dependency here
│   └── tns_modules
│       └── ...
└── platforms
    ├── android
    └── ios
```

If npm doesn't end up working for you, you can just copy and paste this repo's observablesubscribe.js file into your app and reference it directly.


## Usage

To use the  Observable Subscribe Module you must first `require()` it from your project's `node_modules` directory:

```
require( "./node_modules/nativescript-observable-subscribe/observablesubscribe" );
```

Once you have required the module in your code, it will execute and add the subscribe function to observable. You will be able to start using it to get notified of property changes like this:


```
// viewmodel.js
    ...
    var mainViewModel = new HelloWorldModel();
	var counterPropName = 'counter';

	mainViewModel.subscribe(counterPropName, function(args){
		if (this.get(counterPropName) <= 0) {
			this.set(messagePropName, "Hoorraaay! You unlocked the NativeScript clicker achievement!");
		}
		else {
			this.set(messagePropName, this.get(counterPropName) + " taps left");
		} 
	}, mainViewModel);

	exports.mainViewModel = mainViewModel;
```

*Thanks to [TJ VanToll](https://github.com/tjvantoll) for the directory structure graphic above and the template for this doc

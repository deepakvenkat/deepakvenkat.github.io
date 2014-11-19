---
layout : post
title : Testable Javascript patterns
---

There are some javascript patterns which are inherently not testable.

Take for e.g. the singleton patten (from the Essential Design Patterns [book](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript))

```
singleton = (function () {
	var instance;

	function init () {
		var privateVariable = "something";
		function privateMethd () {
			//...
		}
		return {
			publicVariable : "Something else",
			publicMethod : function () {
				//...
			}
		}
	}
	return {
		getInstance : function () {
			if (!instance) {
				instance = init();
			}
			return instance;
		}
	}
}());
```
This ensures (like a singleton should) that the class in instantiated only once. However, if you try to write unit tests for this, you would run into a problem where one test would pollute the value of others. This would be because you would note be able to instantiate it again. A better method would be to just make it a class and have it be instantiated wherever necessary.

Another pattern is the revealing module pattern.

```
revealingModule = function () {
	function privateMethod() {
		//...
	}

	function publicMethod () {
		//...
	}

	return {
		publicMethod : publicMethod
	}
}();
```

In this pattern, public method can be accessed, via `revealingModule.publicMethod`, whereas privateMethod is hidden. While testing this, the problem would be that you would not be able to test the privateMethod and you won't be able to stub it out either.

According to [this blog](https://shanetomlinson.com/2013/writing-testable-javascript-part-2-refactor-away-anti-patterns/), one way to solve this would be add the private methods as public methods only for the purpose of testing. Another way would be to move all the private methods require into a separate module on its own and then have a private instance of that. 
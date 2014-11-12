---
layout : post
title : Cross domain iFrame communication
---

One of the ways to communicate between an iFrame and its parent window is through the postMessage. By ensuring that the parent window captures only those messages from known iFrames, it ensures cross-origin communication. 

E.g. 

```	javascript
//Iframe Window

//First param is the data, second data is the origin.
window.parent.postMessage(“iframe cors”, “*”);
//Parent Window
window.addEventListener(“message”, function (event) {
	console.log(event.data)
	// iframe cors
});
```

Now let’s say we need to reply back to the child iframe. This can be done by the source property within the event. The source property, is the source which triggered the event. 

```javascript
//Iframe Window

window.addEventListener(“message”, function (event) {
	console.log(event.data)
	// => message from parent window
});
window.parent.postMessage(“ message from iframe”, “*”);


//Parent Window

window.addEventListener(“message”, function (event) {
	console.log(event.data)
	// => message from iframe
	event.source.postMessage(“message from parent window”, “*”);
});
```

Source : [Docs](https://developer.mozilla.org/en-US/docs/Web/API/window.postMessage)

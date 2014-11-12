---
layout: post
title : Use currentScript property to get the script being executed.
---

Let’s say you have javascript being executed and for some reason you need to know the script tag. You can get this by using the `currentScript` property of the document object.

Following is an example : 

```
<script type=“text/javascript” src=”script.js”> </script>

//script.js
console.log(document.currentScript)
=> <script type=“text/javascript” src=”script.js”> </script>

```
This works only in the newer versions of Chrome and Firefox. 

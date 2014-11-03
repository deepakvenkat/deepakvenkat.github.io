---
layout : post
title : Use splice to remove an element in a JS array
---

In Javascript, to remove an element of an array with a known index use `splice`. 
Syntax : 

```
	array.splice(index, howMany);
```

It returns the elements removed in an array. You can also use this to add elements to the array [See here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

```
	var a = [1, 2, 3, 4];
	a.splice(2, 1);
	=> [3]
	console.log(a);
	=> [1, 2, 4]
```
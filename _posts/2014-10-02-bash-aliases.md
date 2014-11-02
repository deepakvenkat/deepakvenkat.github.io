---
layout: post
title: Bash Functions for variables in aliases
---

I tend to use aliases in my bash profile for things like connecting to some of servers through ssh and on. This way I don’t have to enter the ip each time. Today I needed to create an alias with a variable in it. I came across this [SO question](http://stackoverflow.com/questions/4438147/alias-with-variable-in-bash) when I was searching for it. So what we can do here is :

```
	function copy-remote { export base = "root@0.0.0.1:/Documents/remote-folder/"; scp $1 "$base$1" ;}
	export -f copy-remote
```
will let you scp a file to your remote folder. 
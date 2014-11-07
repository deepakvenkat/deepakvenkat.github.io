---
layout: post
title: Flags for kill command in unix
---

Sometimes when certain apps are running in the background, the only way (that I can think of) is to kill the process with the `-9` flag. However, something I learnt today was that this flag sends a signal which is not catchable. So if I want my script to exit gracefully then this would not be the correct flag to use. 

For e.g. , let's say I have a node script running, and I want to stop this script. However, when exiting I want the script to do something, like say save something in the memory to the database. I can do this in the following way  ([Documentation](http://nodejs.org/api/process.html#process_signal_events)): 

```
	process.on("SIGINT", function () {
		//Handle the signal
	});
```
However the `-9` flag, is not catchable and not ignorable. So while it is useful when you want to make sure that the process you are trying to kill is definitely killed (since the process can't ignore it), you can not handle it gracefully. Below is a table of all the flags with the signals they send

| Flag	| Signal 	| Explanation	 |
| -----| -------- | -----------	 |
| 1 		| HUP 		| Hang Up 		 |
| 2       | INT 		| Interrupt 		 |
| 3       | QUIT 		| Quit 			 |
| 6       | ABRT		| Abort 		 |
| 9 		| KILL 		| Kill 			 |
| 14 	| ALRM 	| Alarm Clock 	 |
| 15 	| TERM 	| Termination 	 |

Source : [Blog Post](http://www.cyberciti.biz/faq/howto-kill-unix-process-with-kill-command/)
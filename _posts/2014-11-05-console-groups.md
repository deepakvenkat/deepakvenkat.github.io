---
layout : post
title : Logical groups in console logs while debugging
---

While debugging javascript, console.log (or debug, error so on) is a useful tool. One new addition to the console object in the new browsers is console.group. You can use this to logically group related logs and provide a hierarchy for certain logs. A group is started using the `console.group` command and any logs which come after that would be in a group. This continues untill you call `console.groupEnd()`. As in any hierarchy, you can create sub groups just by issuing `console.group` command again.

[Examples](https://developer.mozilla.org/en-US/docs/Web/API/console#Using_groups_in_the_console)
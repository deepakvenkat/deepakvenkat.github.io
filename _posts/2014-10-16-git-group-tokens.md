---
layout: page
title: User group tokens in git branch names for easier workflows
---

When naming git branches, use a group token with a slash after it. This provides a hierarchy to the git branches. and lets you group branches together. This also tells you more about the branch (like for e.g. what part of workflow it is in). While the tokens can be anything which you or your team choses, it would be prudent to keep them short yet clearly distinguish one token from another. 

An example usage of this, would be create different tokens for different kinds of issues like *bug*, *feature*, *story* and so on.

Having these tokens would also mean that, if you have your autocomplete setup, it would be quicker for you to tell things when using command line. 

Source : [SO Thread](http://stackoverflow.com/questions/273695/git-branch-naming-best-practices/6065944#6065944)

E.g. : 

```
	$ git checkout -b bug/foo
	$ git checkout -b bug/bar
	$ git checkout bug<Tab>
	=> bug/foo bug/bar
```
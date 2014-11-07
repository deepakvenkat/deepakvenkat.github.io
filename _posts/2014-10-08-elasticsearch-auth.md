---
layout: post
title : Use nginx to perform simple authentication to Elasticsearch
---

With the way some elasticsearch queries are structured, it would be easy to say shutdown your elasticsearch from an outside api call. To avoid such insecure calls, you can  use nginx as a reverse proxy in front of elasticsearch and make sure that only the endpoints that you want to be exposed are available to networks outside of your own. 

Source : [ES Blog](http://www.elasticsearch.org/blog/playing-http-tricks-nginx/)
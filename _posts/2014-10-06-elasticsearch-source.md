---
layout: post
title: Enable or disable _source when creating Elasticsearch mappings
---

The `_source` field in elasticsearch stores a copy of the JSON which was used to index the document. In cases where we don't need to store the JSON, the _source can be disabled by includinfg the option when creating the mapping. 
If the documents need to be searched by a specific value in the JSON or if a script has to be applied to the search results, then
the `_source` field should be present. 

```
	curl -XPUT localhost:9200/indexname -d '{
	     "settings" : {
	         "number_of_shards" : 1
	     },
	     "mappings" : {
	         "typename" : {
	             "_source" : { "enabled" : false },
	             "properties" : {...}
	         }
	     }
	 }'
```



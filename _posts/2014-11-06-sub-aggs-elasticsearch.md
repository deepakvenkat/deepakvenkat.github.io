---
layout: post
title: Multiple aggregations in elasticsearch
---
All of us, who learnt databases writing SQL statements, tend to look for aggregations in the new data storage and retrieval system which we come across. Elasticsearch is no different. One useful feature in aggregations is the grouping option. Something simple as :

`SELECT COUNT(*) from something GROUP BY somefield ORDER BY COUNT(*) ASC;`

This is simple in elastic search. You can just go :

```
	{
	    “query” : {...}
	    “aggs” : {
	        “aggregation_name” : {
	             “terms” :{
	                  “field” : “field_name”
	              }
	        }
	    }
	}
```

In the above query since elasticsearch returns doc counts with the buckets returned in the aggregations it would give “counts” grouped by the field_name. 

You can extend this by aggregating with multiple fields by giving another term aggregation within the same aggregation. So this would be 


```
	{
	  "query" : {...},
	  "aggs" : {
	    "aggregation_name" : {
	      "terms" : {
	        "field" : "first_field_name"
	      },
	      "aggs" : {
	        "sub_aggregation_name" : {
	          "terms" : {
	            "field" : "second_field_name"
	          }
	        }
	      }
	    }
	  }
	}
```
And this would give the count of different “second_fields” for every first_field.

Now instead of count lets say you want another type of aggregation, say average of the second field, you can just use the “avg” aggregation instead of the “terms” aggregation in the above query. 
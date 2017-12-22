# Resource limits

As with any API, the GraphQL API must protect itself against excessive or abusive calls to the server. We employ three different strategies; Depth, Complexity and Nodes.

### Depth

Depth complexity is verified during query validation and is basically nesting level, if we consider this query:

```graphql
query {
  meetings(sport: "gallops", first: 1) {
    nodes {
      events {        
        result {
          multiPositionResults {
            outcomes {
              odds {
                decimal
              }
            }
          }
        }
      }
    }
  }
}
```

The path `meetings -> nodes -> events -> result -> multiPositionResults -> outcomes -> odds -> decimal` has the depth of `8` and the maximum allowed depth is `20`. When exceeded the execution is aborted and an error with type `ExecutionAborted` is returned.
                                                                                                       
### Complexity

Similar to Depth, Complexity is verified during validation and is the total number of queried fields and nodes.

```graphql
query {
  meetings(sport: "gallops", first: 1) {
    nodes {
      events {        
        result {
          multiPositionResults {
            outcomes {
              odds {
                decimal
                american
                fractional
              }
            }
          }
        }
      }
    }
  }
}
```

The query has `10` in complexity, the maximum allowed complexity is `250`.  When exceeded the execution is aborted and an error with type `ExecutionAborted` is returned.

### Nodes
              
Nodes is different from the Depth and Complexity as it is evaluated during execution and counts number of nodes included. Max allowed is `5 000` nodes. 

If we consider this query:
```graphql
query {
  raceEvent(eventId: 1003161742) {
    name  
    id
    meta {
      raceNumber
      going
    }
  }
}
```           

which will return
 
```json
{
  "data": {
    "raceEvent": {
      "name": "Chelmsford City",
      "id": 1003161742,
      "meta": {
        "raceNumber": 3,
        "going": "Standard"
      }
    }
  }
}
```          

It will return `2` nodes, one RaceEvent and one RaceEventMetaInfo node, fields such as 'name' and 'id' are not counted as nodes.     

Collections within collections might add up quickly, and if we consider this query:

```graphql
query {
  meetings(sport: "gallops", first: 100) {
    nodes {
      events {
        name
      }
    }
  }
}
```            

Here we ask for the first 100 Meeting nodes and for each Meeting all events. If each Meeting has 10 events we get 100 * 10 = 1 000 nodes.

     
                                   

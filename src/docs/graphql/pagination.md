# Pagination

A common use case in GraphQL is traversing a list of nodes, also known as pagination.
A Connection is basically a collection of nodes with pagination support and is used
in Kambi Statistics GraphQL API whenever the collection is of unknown size. This is
also a way to avoid excessive responses.

There are different pagination models, and Kambi Statistics GraphQL API adheres to the [Relay Specification](https://facebook.github.io/relay/) as well as a flat offset based version.

 Any field that represents a Connection accepts a number of arguments:
 - `first` The number of nodes from the head of the collection
 - `last`  The number of nodes from the root of the collection
 - `after` Cursor that specifies where from where the retrieve nodes. 'After is commonly used in combination with 'first' to perform a forward pagination.
 - `before` Cursor that specifies the end of the connection and can be used in combination with 'last' argument to perform a backward pagination.
 
 Either first or last can be specified, but not both at the same time. If none is specified
 the default is first, and the value is field dependent.
 
 Paging information is available in the pageInfo node:
 
::: explorer
 {
   meetings(sport: "gallops", first: 2) {
     pageInfo {
       count
       totalCount
       hasNextPage
       hasPreviousPage
       startCursor
       endCursor      
     }
   }
 }
:::
 
The pagination result contains:
- `count` Number of nodes in the page.
- `totalCount` Total number of nodes available.
- `hasNextPage` Flag which indicates whether another page exists.
- `hasPreviousPage` Flag which indicates whether another page exists.
- `startCursor` The start cursor in the current page, that represents the first node returned.
- `endCursor` The end cursor in the current page, that represents the last node returned. 
   
Get the actual nodes:
 
::: explorer
{
  meetings(sport: "gallops", first: 2) {
    pageInfo { count }
    nodes {
      id
    }  
  }  
}
:::

The relay compatible way:
 
::: explorer
{
  meetings(sport: "gallops", first: 2) {
    pageInfo {
      count
    }
    edges {
      node {
        id
      }
      cursor
    }
  }
}
:::

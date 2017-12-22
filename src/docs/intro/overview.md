# Introduction

Welcome to Kambi Statistics GraphQL API where we provide access to data
and functionality.

### What is the Kambi Statistics GraphQL API?

This API serves results and statistics for past events.

As a player you might want to see the result of a game or race after it
has ended and been settled. Other APIs often only hold the current and
upcoming events. It is possible to query for a specific event by id or
all results for a given sport during a specified period of time.

The API is modeled using GraphQL.


### What is GraphQL?
The [GraphQL](http://graphql.org/) data query language is:

- A [specification](http://facebook.github.io/graphql/).
  The spec determines the validity of the schema on the API server.
  The schema determines the validity of client calls.

- [Strongly typed](http://graphql.org/learn/schema/).
  The schema defines an API's type system and all object relationships.

- [Introspective](http://graphql.org/learn/introspection/).
  A client can query the schema for details about the schema.

- Hierarchical. The shape of a GraphQL call mirrors the shape of the JSON
  data it returns. Nested fields let you query for and receive only the
  data you specify in a single round trip.

- An application layer. GraphQL is not a storage model or a database
  query language. The graph refers to graph structures defined in the
  schema, where nodes define objects and edges define relationships
  between objects. The API traverses and returns application data based
  on the schema definitions, independent of how the data is stored.

### Why is Kambi using GraphQL?
Kambi chose GraphQL for our Statistics API because it offers significantly
more flexibility for our operators. The ability to define precisely the
data you want-and only the data you want-is a powerful advantage over
the REST API endpoints. GraphQL lets you replace multiple REST requests
with a single call to fetch the data you specify.


### Versioning
The version of the Statistics API is given in the URL to GraphQL.
Initial version is "v2018" and is guaranteed to exist for two years.

GraphQL has some very powerful features making it easier to evolve the API.
One that is deprecation. A field might be deprecated and offer information
on an alternative field. Another is that is safe to add new fields to a node
since clients will not receive fields they don't request.

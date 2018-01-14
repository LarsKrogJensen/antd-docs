@[toc]

## Introduction to GraphQL

[argmument](#argument)
GraphQL is a new way to think about building and querying APIs. Rather than construct several REST requests to fetch data that you are interested in, you can often make a single call to fetch the information you need. Additionally you can specify exactly which fields you want included in the response.

GraphQL is, above all, a querying language, and the format of the query you send matches the data you receive. The language has a schema that strongly types the exchange between client and server.

### GraphQL terminology
The Kambi Statistics GraphQL API represents an architectural and conceptual shift from other Kambi REST API:s. You will likely encounter some new terminology in the reference docs.

### Schema

A schema defines a GraphQL API's type system. It describes the complete set of possible data (objects, fields, relationships, everything) that a client can access. Calls from the client are validated and executed against the schema. A client can find information about the schema via introspection. A schema resides on the GraphQL API server.

### Operation

GraphQL support three kind of operations:
- Query: The most common operation where the client request some information, comparable with REST GET verb. 
- Mutation: The purpose of an mutation is to modify data on the backend, comparable with REST POST and PUT verbs. 
- Subscription: Similar to a query, but with an possibly infinite stream of updates. Requires web socket in order to keep the connection between the client and server open. REST does not have an equivalent verb.

For the time being, the Kambi Statistics GraphQL API only supports query operations, subscription is in the roadmap as well. 

### Field

A field is a unit of data you can retrieve from an object. As the official GraphQL docs say: "The GraphQL query language is basically about selecting fields on objects."

The [official spec](http://facebook.github.io/graphql/October2016/) also says about fields:

> All GraphQL operations must specify their selections down to fields which return scalar values to ensure an unambiguously shaped response.

This means that if you try to return a field that is not a scalar, schema validation will throw an error. You must add nested subfields until all fields return scalars.

### Argument

An argument is a set of key-value pairs attached to a specific field. Some fields require an argument. Mutations require an input object as an argument.

### Connection

A common use case in GraphQL is traversing a list of nodes, also known as pagination. A Connection is basically a collection of nodes with pagination support and is used in Kambi Statistics GraphQL API when ever the collection size is unknown.

 
### Edge

Edges represent connections between nodes. When you query a connection, you traverse its edges to get to its nodes. Every `edges` field has a `node` field and a `cursor` field. Cursors are used for pagination.

### Node
_Node_ is a generic term for an object. You can look up a node directly, or you can access related nodes via a connection. If you specify a `node` that does not return a scalar, you must include subfields until all fields return scalars.

## Discovering the GraphQL API

GraphQL is [introspective](http://graphql.org/learn/introspection/). This means you can query a GraphQL schema for details about itself.

Query `__schema` to list all types defined in the schema and get details about each:

::: explorer
query {
  __schema {
    types {
      name
      kind
      description
      fields {
        name
      }
    }
  }
}      
:::

Query `__type` to get details about any type:

::: explorer
query {
  __type(name: "Meeting") {
    name
    kind
    description
    fields {
      name
    }
  }
}     
:::

### Further reading

Below is some good reading material that might help you go deeper into the GraphQL ecosystem:

- [GraphQL Specification](http://facebook.github.io/graphql/)
- [Introduction to GraphQL | GraphQL](http://graphql.org/learn/)
- [List of GraphQL & Relay Resources](https://github.com/chentsulin/awesome-graphql)
- [Apollo GraphQL Client & Tools](http://dev.apollodata.com/)
# Working with variables
[Variables](http://graphql.org/learn/queries/#variables) can make queries more dynamic and powerful, and they can reduce complexity passing complex input objects.

::: info      
**Note:** If you are using the Explorer query console, make sure to enter variables in the separate Query Variables pane, and do not include the word `variables` before the JSON object.
:::

In a javascript frontend project it is common, and a best practice, to keep the queries in a separate .graphql file and using variables to pass in arguments.

An example query might look like:
```graphql
query($sport: String!, $first: Int) {
  meetings(sport: $sport, first: $first) {   
    nodes {
      id
    }
  }
}
```

with variables:
```json
{
  "sport": "gallops",
  "first": 100
}
```


::: info
From a performance perspective using variables will make big difference. 
Before the GraphQL engine actually executes the query, it must be parsed and validated. These two phases are relative expensive and is cached and reused when ever possible.

In the example above we will be able to reuse the query regardless of variables being used.
:::

There are three steps to using variables:

1. Define the variables outside the operation in a `variables` object:
   >```json
   >{
   >  "sport": "gallops",
   >  "first": 100
   >}
   >```
   >
   >The object must be valid JSON. The example shows two simple types, but it�s possible to define more complex types.
   >
2.  Pass the variables into the operation as arguments:
    >```graphql
    >query($sport: String!, $first: Int) {
    >```
    >
    >The arguments is a key-value pair, where the key is the name starting with a `$`and the value is the type. Add a `!` to indicate whether the type is required.
    > 
                                                                                                                    
3. Use the variables within the operation:
   >```graphql
   >  meetings(sport: $sport, first: $first) {   
   >```
   >
   >In this example, we substitute the variable for the sport and first arguments.
   >

This process makes the query argument dynamic. We can now simply change the value in the variables object and keep the rest of the query the same.

Using variables as arguments lets you dynamically update values in the variables object without changing the query.

# Handling errors

Query errors in GraphQL are handled as part of the query reponse, and thus when request is served over HTTP it will always return status code `200`. The reason for this is that GraphQL is transport agnostic, servering over websockets is a common alternative where per frame status codes is not available.

In case of errors the response will include a `errors` tag which is an array of error messages. The `data` tag may or may not be included. GraphQL allows for partial results, where one query operation succeeded while others failed.
 
Example of error message

```graphql
{
  raceEvent(eventId: 1003161275) {
    nameXXX   
  }
}
``` 

will respond with

```json
{
  "errors": [
    {
      "message": "Validation error of type FieldUndefined: Field 'nameXXX' in type 'RaceEvent' is undefined",
      "errorType": "ValidationError",
      "requestId": "0a5a3650-4b52-4099-bb21-e756e35b9c58",
      "locations": [
        {
          "line": 3,
          "column": 5
        }
      ]
    }
  ]
}
``` 

The error consist of:

- message: Human readble string describing the error
- errorType: One of InvalidSyntax, ValidationError, DataFetchingException, ExecutionAborted
- requestId: Unique request identifier that is logged with the message, and should be used in contact when opening a support ticket.
- location: Query source location

| Error type | Source | Description |
|------------|--------|-------------|
| InvalidSyntax         | Client | GraphQL server was unable to parse the query, the syntax is invalid.|
| ValidationError       | Client | Query is syntax valid, but validation failed. Ex. missing required argument. |
| DataFetchingException | Server | Serverside error occured when data was fetched.|
| ExecutionAborted      | Client | Execution aborted due to [resource limts](#/docs/graphql/limits) exceeded |

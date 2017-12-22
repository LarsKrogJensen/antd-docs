# Making requests

### The GraphQL endpoint

While a REST API has numerous endpoints; the GraphQL API has a single endpoint

```http
https://api.kambi.com/statistics/v2018/graphql
```

### Authentication

No authentication is currently required.

### Communicating with GraphQL

Because GraphQL operations consist of multiline JSON, it is recommends using the Explorer to make GraphQL calls. You can also use cURL or any other HTTP-speaking library.

A GraphQL request is a standard HTTPS `POST` request, with a JSON-encoded body containing a `query` key and optionally a `variables` key.

For example, the following `curl` command return the name of specified event:


```bash
curl https://api.kambi.com/v2018/graphql -d\  
'{  
     "query": "{ raceEvent(eventId: 1003161275) { name } }",  
     "variables": "{ }"  
}'

{  
  "data": {  
    "raceEvent": {                             
      "name": "Lingfield"  
    }  
  }  
} 
```   

### Client libraries

GraphQL does not require any specific client library, but there are some client libraries that provide you with a
faster and more comprehensive way to access the API and can assist in handling caching and formatting your requests
and responses.

The [Apollo](https://www.apollographql.com/client/) client libraries are available for:
- [Reac and React Native](http://dev.apollodata.com/react/) 
- [iOS](http://dev.apollodata.com/ios/)
- [Android](http://dev.apollodata.com/android/)
- [Angular](http://dev.apollodata.com/angular2/)
- [Vanilla JS](http://dev.apollodata.com/core/)

Additional libraries:
- [GraphQL.js](https://github.com/graphql/graphql-js)
- [Relay](https://github.com/facebook/relay)
- And much more is available at [Awesome GraphQL](https://github.com/chentsulin/awesome-graphql#lib)
                                                                                  


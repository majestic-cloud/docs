## Serverless event submission patterns

### Client polling pattern

With this pattern clients are returned a "handle" from the API Gateway which they can use to poll for the status of a long running job through a /status endpoint.

#### Advantages
- Allows for the easy replacement of a synchronous flow

#### Disadvantages
- Introduces additional latency for the client
- If nothing has changed then then we have unnecessary work and associated costs

### Webhook pattern with AWS SNS
With this pattern the client sets up a webhook endpoint and once the processing completes the response is dispatched via SNS subscriber that uses the https webhook endpoint as destination

### Websockets pattern with API Gateway
In this pattern there is an API Gateway (with Websockets) and a websocket URL is transmitted to the workflow which will use this to communicate back to the client via websockets.

#### Read more
- [From Poll to Push: Transform API's using Amazon API Gateway REST APIs and Websockets](https://aws.amazon.com/blogs/compute/from-poll-to-push-transform-apis-using-amazon-api-gateway-rest-apis-and-websockets/)

### Websockets pattern with AWS AppSync
With this pattern you're using the AppSync service (GraphQL) instead of API Gateway to communicate between the client and your backend. Responses are transmitted back to the client from AppSync.

### Claim check pattern
With this pattern you're using pre-signed S3 URL's to retrieve URL's that 3rd parties can use to access specific buckets and objects without requiring AWS credentials


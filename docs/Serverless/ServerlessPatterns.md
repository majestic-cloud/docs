## Serverless event submission patterns

### Client polling pattern

With this pattern clients are returned a "handle" from the API Gateway which they can use to poll for the status of a long running job through a /status endpoint.

#### Advantages
- Allows for the easy replacement of a synchronous flow

#### Disadvantages
- Introduces additional latency for the client
- If nothing has changed then then we have unnecessary work and associated costs


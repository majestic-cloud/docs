# DynamoDB basics

- stored on SSD storage
- data stored in 3 geographically distinct data centers   
- eventual consistent reads (default)
- strongly consistent reads
- transactions (all or nothing)
- on demand capacity
- provisioned capacity
- on demand backup and restore with no performance impact
- point in time recovery in the last 35 days
- incremental backups
- streams (sequence of item level changes in the last 24 hours)
- data is encrypted at rest using KMS


# DynamoDB Global Tables

- designed for globally distributed applications
- the underlying technology is based on DynamoDB streams
- replication under one second
- multi-region redundancy
- 

# DynamoDB DAX

- fully managed, highly available, in memory cache
- offers an up to 10x performance improvement
- request times in the microseconds range
- works also for writes 



# Types of encryption

## Server side encryption (SSE)

1. SSE-S3
    - keys are managed by AWS
    - uses AES-256 type encryption
    - must set header: "x-amz-server-side-encryption":"AES256"

2. SSE-KMS
    - keys are managed by AWS KMS 
    - must set header: "x-amz-server-side-encryption":"aws:kms"
    - you can control the keys through KMS

3. SSE-C
    - you need to provide the keys yourself (in header of every request)
    - needs to use HTTPS
    - You control the keys, S3 does not store the encryption keys

## Client side encryption 
    - There is a client library named Amazon S3 Encryption Client which can be used
    - clients must encrypt & decrypt the data themselves, all data transmitted to and from AWS is already encrypted
    - full control at the customer
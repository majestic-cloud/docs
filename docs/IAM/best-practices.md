# IAM best practices

- never use the root account in day to day operations
- each person should have its own IAM user
- only assign the permissions the user / role really needs to perform his tasks
- use groups to assign permissions to IAM users
- unused credentials should be removed
- have a strong password policy
- rotate credentials often
- enable MFA
- use the AWS provided policies whenever possible
- you should use policy conditions to fine tune security
- use monitoring to follow what happens in your AWS account



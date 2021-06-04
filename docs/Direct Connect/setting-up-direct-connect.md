# Setting up Direct Connect

- in the Direct Connect console select your physical connection and create a virtual interface (Public Virtual Interface)
- In the VPC console go to VPN connections and create a Customer Gateway
- Create a Virtual Private Gateway (VPG)
- Attach the VPG to the VPC you want to connect to
- go to VPN Connections and create a new VPN Connection
- select the VPG and the Customer Gateway
- When VPN is available setup the VPN on the customer gateway (or firewall)

## External resources
[Video by AWS on how to set up Direct Connect](https://www.youtube.com/watch?v=dhpTTT6V1So)
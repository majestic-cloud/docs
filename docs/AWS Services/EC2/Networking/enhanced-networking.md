# Enhanced networking

1. EC2 Enhanced networking (SR-IOV)

Good for lower latency workloads with better networking

    - This is a lower latency, high bandwidth option which also offers a higher PPS (packet per second)
    - Only works with newer generation instances
    - Option A: Elastic Network Adapter (ENA) - up to 100 Gbps
    - Option B: Intel 82599 VF with up to 10 Gbps - legacy option
    

2. Elastic Fabric Adapter

Good for HPC workloads 

    - Basically an improved ENA for High Performance Computing (HPC)
    - works with Linux only
    - uses the MPI (Message Passing Interface) standard
    - bypasses the the underlying OS and this way allows HPC and ML applications to communicate directly with the network interface hardware - providing low-latency, reliable transport  
    
    
 ## Useful commands to know 
 
 ```modinfo ena```   
 Will display information related to the ena 
 
 ```ethtool -i eth0```
 
 Displays information regarding the network interface drivers
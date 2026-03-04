Terraform AWS High Availability Web Application
📌 Project Summary

Designed and deployed a #HighAvailability, #AutoScaling web application architecture on #AWS using #Terraform (#InfrastructureAsCode).

This project provisions a production-style cloud environment including #VPC networking, #ApplicationLoadBalancer, #LaunchTemplate, and #AutoScalingGroup for resilient and scalable infrastructure.

The entire stack is automated using Terraform to ensure repeatability, consistency, and version-controlled deployments.

🏗 Architecture Overview

Custom #VPC

Multi-AZ #PublicSubnets

#InternetGateway

#RouteTables

#ApplicationLoadBalancer (ALB)

#TargetGroup with health checks

#LaunchTemplate

#AutoScalingGroup (minimum 2 EC2 instances)

#EC2 (t3.micro – Free Tier optimized)

🚀 Key Features

#LoadBalancing across multiple EC2 instances

#AutoScaling for high availability and fault tolerance

#MultiAZ deployment strategy

Security group isolation (ALB → EC2 only)

Automated NGINX installation via #UserData

Fully automated #InfrastructureDeployment

Production-style #CloudArchitecture

🛠 Technologies Used

#Terraform
#AWS
#AmazonVPC
#AmazonEC2
#ApplicationLoadBalancer
#AutoScaling
#IAM
#SecurityGroups

📚 Key Learning Outcomes

Designing #HighlyAvailable systems

Implementing #AutoScalingStrategies

Configuring #LoadBalancers and health checks

Deep understanding of #AWSNetworking (VPC, Subnets, IGW, Routes)

Applying #SecurityBestPractices

Writing modular and reusable #Terraform code

Deploying scalable #CloudInfrastructure

🔐 Security Considerations

ALB allows HTTP from public internet

EC2 instances allow HTTP only from ALB Security Group

SSH restricted to personal IP

Instances are not directly publicly exposed

Applied #LeastPrivilege principle

📈 Future Improvements

Add HTTPS using #ACM + ALB

Implement CPU-based #ScalingPolicies

Move EC2 to private subnets with #NATGateway

Add #RDS backend

Configure remote Terraform state (#S3 + #DynamoDB)

Implement #CICD with GitHub Actions

💼 Resume Description

Designed and deployed a #HighlyAvailable AWS web application architecture using #Terraform, implementing custom #VPC networking, #ApplicationLoadBalancer, #LaunchTemplates, and #AutoScalingGroups across multiple availability zones.

🏷️ Core Stack

#AWS #Terraform #DevOps #CloudComputing #InfrastructureAsCode #HighAvailability #AutoScaling #LoadBalancer #CloudEngineering #EC2 #VPC #AWSProjects
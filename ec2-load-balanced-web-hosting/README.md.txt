# Highly Available Web Application Deployment using EC2 & Application Load Balancer

## 📌 Project Summary
Designed and deployed a highly available web application architecture on AWS using multiple EC2 instances behind an Application Load Balancer (ALB). The system distributes traffic across instances running in different Availability Zones to ensure fault tolerance and reliability.

## 🏗 Architecture Overview
- Amazon EC2 instances deployed in multiple Availability Zones
- Application Load Balancer for traffic distribution
- Security Groups for controlled network access
- Target Groups for health-based routing
- Optional Auto Scaling Group for elasticity

## 🚀 Key Features
- High availability architecture
- Layer 7 load balancing (HTTP/HTTPS)
- Health checks for automatic traffic redirection
- Secure inbound/outbound traffic control
- Scalable design

## 🛠 Technologies Used
Amazon EC2  
Application Load Balancer  
VPC  
Security Groups  
IAM  

## 📚 Key Learning Outcomes
- Designing fault-tolerant cloud architectures
- Understanding ALB routing mechanisms
- Implementing secure network boundaries
- Deploying compute resources across AZs

## 🔐 Security Considerations
- Principle of least privilege applied via IAM roles
- Restricted security group rules
- Controlled SSH access

## 📈 Future Improvements
- Implement Auto Scaling policies
- Add CloudWatch alarms
- Integrate CI/CD pipeline

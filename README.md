# ☁️ AWS Cloud Portfolio – Farshid

This repository contains **24 hands-on AWS & DevOps cloud projects** demonstrating real-world cloud engineering, infrastructure automation, serverless architecture, containerization, monitoring, security, and cost optimization.

Each project focuses on production-style architectures, scalability, and industry best practices.

---

## 👨‍💻 About Me

**Name:** Farshid  
**Role Goal:** AWS Cloud Engineer / Junior Cloud Engineer  
**Core Focus:** Scalable, secure, automated cloud infrastructure  

### 🛠️ Technical Skills

- **Cloud:** AWS (EC2, S3, IAM, Lambda, RDS, CloudFront, DynamoDB, API Gateway, EventBridge, SNS, CloudWatch)
- **Infrastructure as Code:** Terraform, AWS CloudFormation
- **Containers & Orchestration:** Docker, Docker Compose, Kubernetes
- **CI/CD:** GitHub, CodePipeline, CodeBuild
- **Monitoring & Cost Optimization:** CloudWatch, AWS Budgets, Cost Explorer
- **Other:** Linux, Git, Networking Fundamentals

---

# 📂 Projects Overview

| #  | Project Name |
|----|--------------|
| 1  | EC2 Load Balanced Website Hosting |
| 2  | Static Website Hosting with Amazon S3 |
| 3  | IAM Users and Roles Configuration |
| 4  | Event-Driven Architecture with AWS Lambda (S3 & CloudWatch Triggers) |
| 5  | Infrastructure as Code using AWS CloudFormation |
| 6  | Full-Stack Food Ordering Web Application (EC2 + RDS) |
| 7  | Serverless Resume Builder with Visitor Counter |
| 8  | Secure File Storage Web Application (API Gateway + Lambda + S3) |
| 9  | Real-Time EC2 Health Monitoring & Alerts (CloudWatch + SNS) |
|10  | Automated EC2 Backup & Snapshot Management (EventBridge + Lambda) |
|11  | End-to-End Serverless Feedback Web Application |
|12  | Multi-Tenant Serverless File Storage System |
|13  | CI/CD Pipeline using GitHub, CodePipeline & CodeBuild |
|14  | CloudFront Distribution with Origin Access Control (OAC) |
|15  | Monitoring & Cost Alerts with CloudWatch, SNS & AWS Budgets |
|16  | Serverless Notes Management Web Application |
|17  | Advanced Multi-Tenant Serverless System |
|18  | FilmDex – Containerized Full-Stack Movie Review Application (Docker + Node.js) |
|19  | AWS Cloud Cost Monitoring & Optimization Dashboard |
|20  | Real-Time IAM Security Auto-Remediation System |
|21  | Full-Stack Serverless Power of Math Calculator (Amplify + Lambda + API Gateway) |
|22  | Multi-Service Containerized Deployment & Orchestration (Docker Compose) |
|23  | Containerized Node.js Application Deployment with Kubernetes |
|24  | High Availability Web Application using Terraform (ALB + Auto Scaling) |

---

# 🚀 Project 24 – High Availability Web Application using Terraform

**Tech Stack:** Terraform, AWS VPC, EC2, Application Load Balancer (ALB), Auto Scaling Group (ASG), Launch Template  

## 📌 Description

Designed and deployed a highly available and scalable web application architecture on AWS using Terraform (Infrastructure as Code).

This project demonstrates real-world cloud infrastructure automation using a modular Terraform structure.

---

## 🏗️ Architecture Components

- Custom VPC
- Public Subnets across multiple Availability Zones
- Internet Gateway
- Application Load Balancer (ALB)
- Target Group with health checks
- Launch Template
- Auto Scaling Group (Min: 2, Max: 3)
- Security Groups with controlled inbound rules

---

## ⚙️ What I Implemented

- Modular Terraform project structure
- Infrastructure fully provisioned using `terraform init`, `plan`, and `apply`
- Multi-AZ deployment for high availability
- Load-balanced EC2 instances
- Auto Scaling configuration
- User data bootstrap for Nginx installation
- Clean Git structure with `.gitignore` best practices

---

## 📚 Key Learnings

- Infrastructure as Code (IaC) best practices
- Modular Terraform architecture
- High availability design patterns
- Load balancing and health checks
- Auto Scaling lifecycle management
- Production-style AWS networking setup

---

## 🏷️ Hashtags

#Terraform #AWS #CloudEngineering #InfrastructureAsCode #DevOps #AutoScaling #LoadBalancing #HighAvailability #LearningInPublic

---

# 📦 Project 23 – Kubernetes Deployment (Containerized Node.js)

**Tech:** Node.js, Docker, Kubernetes, HPA, Docker Desktop  

## What I Implemented

- Dockerized Node.js web application  
- Kubernetes Deployment with replica sets  
- Resource requests and limits  
- Liveness & readiness probes  
- NodePort Service exposure  
- Horizontal Pod Autoscaler (HPA)  
- kubectl debugging and troubleshooting  

## Key Learnings

- Container orchestration concepts  
- Pod lifecycle and health checks  
- Autoscaling strategies  
- Cluster-level debugging  
- Real-world DevOps troubleshooting  

---

# 💡 What This Portfolio Demonstrates

✔ Real AWS hands-on experience  
✔ Serverless & event-driven architectures  
✔ Infrastructure as Code (Terraform & CloudFormation)  
✔ CI/CD automation  
✔ Monitoring & logging  
✔ Cost optimization awareness  
✔ Containerization & orchestration  
✔ Production-style scalable architectures  

---

# 📁 Repository Structure

Each project is organized in its own folder:

# 📝 Serverless Notes Management Web Application

A fully serverless Notes Management application that allows users to create, view, and delete notes using AWS-managed services.

This project demonstrates how to build a **backend API without servers** and connect it to a **static frontend**.

---

## 🏗️ Architecture Overview

User → Amazon S3 (Frontend)  
Frontend → Amazon API Gateway (REST API)  
API Gateway → AWS Lambda  
Lambda → Amazon DynamoDB  
Logs & Monitoring → Amazon CloudWatch  

---

##  AWS Services Used

- **Amazon S3** – Hosts the static frontend (HTML, CSS, JavaScript)
- **Amazon API Gateway (REST API)** – Exposes backend endpoints
- **AWS Lambda** – Handles create, read, and delete note logic
- **Amazon DynamoDB** – Stores notes data
- **AWS IAM** – Permissions between services
- **Amazon CloudWatch** – Logs and monitoring

---

##  Features

- Create notes
- View all notes
- Delete notes
- Fully serverless (no EC2, no servers)
- Scalable and cost-efficient
- JSON-based REST API

---

##  How the Project Works

1. User opens the Notes web app hosted on S3
2. JavaScript sends HTTP requests to API Gateway
3. API Gateway triggers Lambda functions
4. Lambda reads/writes notes in DynamoDB
5. Response is sent back as JSON
6. Frontend updates the UI dynamically

---

##  Folder Structure


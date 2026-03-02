# 🎨 Artistry – Dockerized Node.js Application with Kubernetes Deployment

---

## 📌 Project Summary
Designed and deployed a cloud-native Node.js art gallery web application using Docker and Kubernetes (Docker Desktop local cluster).  
The application is fully containerized, horizontally scalable, and exposed externally using a Kubernetes NodePort service with Horizontal Pod Autoscaling enabled.

---

## 🏗 Architecture Overview

- User Browser (`http://localhost:<NodePort>`)
- Kubernetes Service (NodePort)
- Kubernetes Deployment (Multi-Replica Setup)
- Dockerized Node.js Application
- Horizontal Pod Autoscaler (HPA)

### 📐 Architecture Diagram
![Architecture Diagram](./architecture.png)

---

## 🚀 Key Features

✔ Containerized Node.js application  
✔ Kubernetes Deployment with multiple replicas  
✔ NodePort Service for external access  
✔ Horizontal Pod Autoscaler (HPA)  
✔ Rolling update support  
✔ Load-balanced traffic distribution  
✔ Scalable and resilient architecture  

---

## 🛠 Technologies Used

#NodeJS  
#Docker  
#Kubernetes  
#DockerDesktop  
#Containerization  
#DevOps  
#HPA  
#YAML  

---

## 📦 Application Features

- 🎨 Modern Art Gallery UI
- 🖼 40+ painting thumbnails
- 🔎 Search functionality
- 💲 Mock pricing display
- 🛒 Add-to-cart simulation
- 📱 Responsive design

---

## ⚙️ Deployment Workflow

### 1️⃣ Build Docker Image
```bash
docker build -t artistry-k8s-app:v1 .
```

### 2️⃣ Deploy to Kubernetes
```bash
kubectl apply -f k8s-deployment.yml
```

### 3️⃣ Verify Resources
```bash
kubectl get deployments
kubectl get pods
kubectl get svc
```

### 4️⃣ Access Application
```
http://localhost:<NodePort>
```

---

## 📚 Key Learning Outcomes

- Docker image creation & optimization  
- Writing production-ready Dockerfiles  
- Kubernetes Deployment configuration  
- Service exposure using NodePort  
- Horizontal Pod Autoscaling implementation  
- YAML-based infrastructure management  
- Local Kubernetes cluster operations  

---

## 🔐 Security Considerations

- Isolated container runtime  
- Controlled external exposure via NodePort  
- Replica-based fault tolerance  
- Resource-based scaling policies  
- Kubernetes namespace isolation  

---

## 📈 Future Improvements

- Implement Ingress Controller  
- Add CI/CD using GitHub Actions  
- Push images to Docker Hub  
- Deploy to AWS EKS  
- Integrate Prometheus & Grafana monitoring  
- Enable HTTPS with cert-manager  
- Add environment-based configuration  

---

## 🎯 Project Outcome

This project demonstrates:

- Cloud-native application deployment  
- Container orchestration using Kubernetes  
- High availability through replica management  
- DevOps workflow execution  
- Scalable infrastructure design  

---

### 🚀 Portfolio Category:
#CloudEngineering #DevOps #Docker #Kubernetes #ScalableSystems #InfrastructureAsCode

---